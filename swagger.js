const options = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "My -Sample Nodejs Rest Service- Swagger",
        "description": "My -Sample Nodejs Rest Service- Swagger",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "host": "https://sample-nodejs-rest-service.azurewebsites.net",
    "basePath": "/api/v1/",
    "tags": [
        {
            "name": "Users",
            "description": "There are user end points"
        },
        {
            "name": "Posts",
            "description": "There are post end points"
        },
        {
            "name": "Comments",
            "description": "There are comment end points"
        },
        {
            "name": "User Posts",
            "description": "There are user-posts end points"
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
        },
        "/post/{postId}" : {
            "get": {
                "tags": [
                    "Posts"
                ],
                "summary": "Get post by postId",
                "parameters": [
                    {
                        "name": "postId",
                        "in": "path",
                        "schema": {
                            "$ref": "#/definitions/Post"
                        },
                        "required": true
                    },
                ],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    '400': {
                        "description": 'Missing parameters',
                        "content": {
                            'application/json': {
                                "example": {
                                    "message": 'postId is missing',
                                    "internal_code": 'missing_parameters'
                                }
                            }
                        }
                    }
                }
            }
        },
        "/user/{userId}/post": {
            "get": {
                "tags": [
                    "User Posts"
                ],
                "summary": "Get posts by userId",
                "parameters": [
                    {
                        "name": "userId",
                        "in": "path",
                        "schema": {
                            "$ref": "#/definitions/Post"
                        },
                        "required": true
                    },
                ],
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
        "/comment/{postId}" : {
            "get": {
                "tags": [
                    "Comments"
                ],
                "summary": "Get comment by postId",
                "parameters": [
                    {
                        "name": "postId",
                        "in": "path",
                        "schema": {
                            "$ref": "#/definitions/Comment"
                        },
                        "required": true
                    },
                ],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    '400': {
                        "description": 'Missing parameters',
                        "content": {
                            'application/json': {
                                "example": {
                                    "message": 'postId is missing',
                                    "internal_code": 'missing_parameters'
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
        },
        "Post": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "example":1
                },
                "userId": {
                    "type": "integer",
                    "example":10
                },
                "title": {
                    "type": "string",
                    "example":"qui est esse"
                },
                "body": {
                    "type": "string",
                    "example":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae..."
                }
            }
        },
        "Comment": {
            "type": "object",
            "properties": {
                "id" : {
                    "type": "integer",
                    "example":1
                },
                "postId": {
                    "type": "integer",
                    "example":1
                },
                "name" : {
                    "type": "string",
                    "example":"John Doe"
                },
                "email":{
                    "type": "string",
                    "example":"john.doe@swagger.com"
                },
                "body":{
                    "type": "string",
                    "example":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae..."
                }
            }
        }
    }
};

module.exports = options;