const https = require('https');

const queries = [
  "Ferromanganese",
  "Ferrochrome",
  "Ferrosilicon",
  "steel billets",
  "wire rod coil",
  "steel pipes",
  "steel tubes",
  "mild steel"
];

function fetchImages(query) {
  const url = \`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=\${encodeURIComponent(query)}\`;
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const json = JSON.parse(data);
      const pages = json.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId !== '-1' && pages[pageId].original) {
        console.log(\`\${query}: \${pages[pageId].original.source}\`);
      } else {
        // Fallback to commons search
        const commonsUrl = \`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=\${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&format=json\`;
        https.get(commonsUrl, (cRes) => {
          let cData = '';
          cRes.on('data', (chunk) => cData += chunk);
          cRes.on('end', () => {
            const cJson = JSON.parse(cData);
            if (cJson.query && cJson.query.pages) {
              const cPageId = Object.keys(cJson.query.pages)[0];
              console.log(\`\${query} (Commons): \${cJson.query.pages[cPageId].imageinfo[0].url}\`);
            } else {
              console.log(\`\${query}: No image found\`);
            }
          });
        });
      }
    });
  });
}

queries.forEach(fetchImages);
