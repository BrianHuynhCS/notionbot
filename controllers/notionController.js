require('dotenv').config();

const notion = require('../services/notionService');

async function addPage(task, tag) {
    try {

        await notion.pages.create({
            "parent": {
                "type": "database_id",
                "database_id": process.env.DATABASE_ID
            },
            "properties": {
                "Task": {
                    "title": [
                        {
                            "text": {
                                "content": task
                            }
                        }
                    ]
                },
                "Tags": {
                    "select": {
                        "name": tag
                    }
                }
            }
        })
    } catch (error) {
        console.log("Error adding page to Notion.")
    }

}

module.exports = {
    addPage
}
