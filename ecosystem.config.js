module.exports = {
    apps : [
        {
            name: "sa_page_local",
            mode: "cluster",
            script: "./server.js",
            watch: true,
            env_development: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 8000,
                "NODE_ENV": "production",
            }
        }
    ]
}