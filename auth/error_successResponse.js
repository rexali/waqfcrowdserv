const error_response =
{
    400: {
        result: false,
        error: 400,
        message: "Bad request"
    },

    404: {
        result: false,
        error: 404,
        message: "Data or page not found"
    },

    405: {
        result: false,
        error: 405,
        message: "Method not allowed"
    },

    500: {
        result: false,
        error: 500,
        message: "Internal server error"
    },

    422: {
        result: false,
        error: 422,
        message: "Unable to process"
    }
}

const success_response = {

    result: true,
    data: []
}

module.exports = {
    error_response,
    success_response
}