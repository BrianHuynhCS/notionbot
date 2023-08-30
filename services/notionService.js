require('dotenv').config();

const { Client } = require("@notionhq/client");
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// async function addPage(task, tag) {
//     try {
//         await notion.pages.create({
//             "parent": {
//                 "type": "database_id",
//                 "database_id": process.env.DATABASE_ID
//             },
//             "properties": {
//                 "Task": {
//                     "title": [
//                         {
//                             "text": {
//                                 "content": task
//                             }
//                         }
//                     ]
//                 },
//                 "Tags": {
//                     "select": {
//                         "name": tag
//                     }
//                 }
//             }
//         })
//     } catch (error) {
//         console.error('Error adding page:', error);
//     }

// }

module.exports = {
    notion
};
