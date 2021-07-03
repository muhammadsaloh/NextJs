module.exports = {
    apps : [
        {
            name: "intro",
            mode: "cluster",
            script: "next start",
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