const options = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "My User Project CRUD",
        "description": "My User Project Application API",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "host": "localhost:8080",
    "basePath": "/api/v1/",
    "tags": [
        {
            "name": "Users",
            "description": "There are user end points"
        },
        {
            "name": "Posts",
            "description": "There are post end points"
        }
    ],
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],

    "paths": {
        "/user": {
            "get": {
                "tags": [
                    "Users"
                ],
                "summary": "Get all users in system",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    '400': {
                        "description": 'Missing parameters',
                        "content": {
                            'application/json': {
                                "example": {
                                    "message": 'userId is missing',
                                    "internal_code": 'missing_parameters'
                                }
                            }
                        }
                    }
                }
            }
        },
        "/user/{userId}": {
            "get": {
                "tags": [
                    "Users"
                ],
                "summary": "Get only one user",
                "description": "des",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "schema": {
                            "$ref": "#/definitions/User"
                        },
                        "required": true
                    },
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        },
        "/post":{
            "get": {
                "tags": [
                    "Posts"
                ],
                "summary": "Get All Posts",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    '500': {
                        "description": 'Internal Error',
                        "content": {
                            'application/json': {
                                "example": {
                                    "message": 'Something went wrong',
                                    "internal_code": 'internal_error'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "User": {
            "type": "object",
            "properties": {
                "userId": {
                    "type": "integer",
                    "example":1
                }
            }
        }
    }
};

module.exports = options;