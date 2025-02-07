[

{
        sinkIcon: "discord", 
        source: "github", 
        sink:"http", 
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on Discord when someone gives a star to their repo.", 
        "subTitle": "GitHub star event triggers a Discord message", 
        "id": "20230320_1"
},

{
        sinkIcon: "discord", 
        source: "github", 
        sink:"http", 
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on Discord when someone creates an issue on their repo.", 
        "subTitle": "GitHub issue event triggers a Discord message", 
        "id": "20230320_2"
},

{
        sinkIcon: "discord", 
        source: "github", 
        sink:"http", 
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on Discord when someone creates an issue comment on their repo.", 
        "subTitle": "GitHub issue comment event triggers a Discord message", 
        "id": "20230320_3"
},

{
        sinkIcon: "discord",
        source: 'github', 
        sink:'http', 
        "description": "The maintenance team of the GitHub repo can receive real-time notifications on Discord when anyone opens a pull-request.", 
        "subTitle": "GitHub opened pull-request event triggers a Discord message", 
        "id": '20230321_1'
},

{
        sinkIcon: "auth0",
        source: 'webhook', 
        sink:'http', 
        "description": "The Auth0 Client can receive real-time notifications of user's activity on Feishu when someone logs in to their account.", 
        "subTitle": "Auth0 login event triggers a Feishu message", 
        "id": '20230323_1'
},

{
        sinkIcon: "auth0",
        source: 'webhook', 
        sink:'http', 
        "description": "The Auth0 Client can receive real-time notifications of user's activity on Slack when someone logs in to their account.", 
        "subTitle": "Auth0 login event triggers a Slack message", 
        "id": '20230323_2'
}

{
        sinkIcon: "auth0",
        source: 'webhook',
        sink: 'http',
        "description": "The Auth0 Client can receive real-time notifications of how many times a user is logged in to their account with the associated IP address",
        "subTitle": "Auth0 loginCount event triggers a Discord message with login counts and associated IP adddress.",
        "id": '20230326_1'
}

]
