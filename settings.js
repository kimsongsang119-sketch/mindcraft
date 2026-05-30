const settings = {
    "minecraft_version": "1.21.1",
    "host": "play.wrd.kr",
    "port": 28031,
    "auth": "offline",

    "mindserver_port": 8080,
    "auto_open_ui": false,
    
    "base_profile": "survival",
    "profiles": [
        "./riven.json"
    ],

    "load_memory": false,
    "init_message": "안녕, 나는 Riven이야.",
    "only_chat_with": [],

    "speak": false,
    "chat_ingame": true,
    "language": "ko",
    "render_bot_view": false,

    "allow_insecure_coding": false,
    "allow_vision": false,
    "blocked_actions": [],
    "code_timeout_mins": -1,
    "relevant_docs_count": 5,

    "max_messages": 5,
    "num_examples": 1,
    "max_commands": -1,
    "show_command_syntax": "full",
    "narrate_behavior": true,
    "chat_bot_messages": false,

    "spawn_timeout": 30,
    "block_place_delay": 0,
    "log_all_prompts": false
};

export default settings;
