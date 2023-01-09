// const postList = (posts) => {
//   return `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <title>Wizard News</title>
//     <link rel="stylesheet" href="/style.css" />
//   </head>
//   <body>
//     <div class="news-list">
//       <header><img src="/logo.png"/>Wizard News</header>
//       ${posts.map(post => `
//         <div class='news-item'>
//           <p>
//             <span class="news-position">${post.id}. ▲</span>
//             <a href="/posts/${post.id}">${post.title}</a>
//             <small>(by ${post.name})</small>
//           </p>
//           <small class="news-info">
//             ${post.upvotes} upvotes | ${post.date}
//           </small>
//         </div>`
//       ).join('')}
//     </div>
//   </body>
//   </html>
// `;
// };

// const postDetails = (posts) => {
// return  `<!DOCTYPE html>
// <body>
// <link rel="stylesheet" href="/style.css" />
// <div class='news-list'>
// <header><img src="/logo.png"/>Wizard News</header>
//   <div class="title">
// ${posts.title}
// <small>(by ${posts.name})</small>
// </div>
// <div class="content">
// ${posts.content}
// </div>
// </div>
// </body>
// </html>
// `
// }
// module.exports = 
// { postList: postList, postDetails: postDetails };