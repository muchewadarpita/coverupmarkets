/**
 * These are the constant error 
 * messages which will be used 
 * through out the project.
 * @param {string} data 
 * @returns 
 */
function errorMessages(data) {
    return {
        ERROR_POPULATING_DB: "Error occurred while populating the DB",
        ENTRY_DOES_NOT_EXISTS: "Requested entry does not exists!",
        CANNOT_FETCH_DOMAIN_DATA: 'Error while fetching the requested domain data!',
        CANNOT_FETCH_CLIENT_DATA: 'Error while fetching the requested client data!',
        PROVIDE_NECESSARY_DETAILS: 'Please provide necessary details!',
        CANNOT_GET_DATA_FROM_DB: "Cannot GET data from DB",
        CANNOT_PROCESS_REQUEST: "Error in processing request",
        INVALID_DATA_FORMAT: 'Invalid data format',
        SOMETHING_WENT_WRONG: 'Something went wrong!',
        LABEL_NOT_FOUND: `No labels found corresponding to ${data}`,
        FILTERS_NOT_FOUND: `No filters found corresponding to ${data}`,
        CANNOT_CREATE_DATA_FOR_SHIELD_TABLE: `Error while creating data for shield table corresponding to ${data}`,
        CANNOT_WRITE_DATA_FOR_SHIELD_TABLE: `Error while writing data for shield table`,
        ERROR_SUBMITTING_FEEDBACK: 'Error submitting feedback',
        CANNOT_CREATE_ENTRY: `Error while creating entries for ${data}!`,
        CANNOT_UPDATE_ENTRY: `Error while updating entries for ${data}!`,
        NO_TOKEN_RECEIVED: 'Please provide authentication token',
        NO_DOMAIN_NAME_RECEIVED: 'Please provide a valid domain name',
        NO_CLIENT_NAME_RECEIVED: 'Please provide a valid client name',
        NO_RESPONSE_FROM_MODEL: "No response obtained from model",
        ERROR_FROM_MODEL: "Error obtained from model",
        CANNOT_FILTER_NO_BIAS: 'Error while filtering NO BIAS segments',
        CANNOT_ENCRYPT_DATA: 'Error encrypting the data',
        CANNOT_DECRYPT_DATA: 'Error decrypting the data',
        CANNOT_SEND_EMAIL: 'Error while sending the email',
        EMAIL_NOT_REGISTERED: `No email corresponding to ${data} exists`,
        ERROR_GENERATING_SCREENER_URL: 'Error generating screener URL',
        USAGE_LIMIT_EXHAUSTED: "Usage limit for screener have been exhausted",
        SESSION_UNAUTHORIZED: "User session not authorized. Please sign-in",
        NO_RECORDS_TO_UPDATE: "No records to update",
        ORG_USER_CONFIGURATION_NOT_UPDATED: 'Configuration not updated for user or org',
        ORG_USER_LICENSE_NOT_UPDATED: 'Cannot allocate license to user, as named user licenses are not enabled for the organization',
        ERROR_GENERATING_CONTENT: `Error generating content for ${data}`,
        ERROR_SEARCHING_CONTENT: `Error searching content for ${data}`,
        ERROR_SIGNING_OUT: "Error signing out",
        ERROR_LOGGING_IN: "Error logging in!"
    }
}


/**
 * These are the constant success 
 * messages which will be used 
 * through out the project.
 * @param {string} data 
 * @returns 
 */
function successMessages(data) {
    return {
        LOGIN_SUCCESSFUL: "Login Successful",
        DATA_WRITTEN_SUCCESSFULLY: 'Writing data Completed Successfully!',
        DATA_DELETED_SUCCESSFULLY: 'Deleting data Completed Successfully!',
        FEEDBACK_RECEIVED: 'Feedback Recieved Successfully!',
        DOMAIN_DATA_RECEIVED: "Domain data received successfully",
        CLIENT_DATA_RECEIVED: "Client data received successfully",
        ENCRYPTION_SUCCESSFULLY_DONE: "Encryption performed successfully",
        DECRYPTION_SUCCESSFULLY_DONE: "Decryption performed successfully",
        ENDPOINT_WORKED_SUCCESSFULLY: "endpoint responded back successfully",
        RESPONSE_RECEIVED_FROM_MODEL: "Response from model received successfully",
        TABLE_POPULATED: `${data} table populated successfully`,
        MAIL_SENT_SUCCESSFULLY: `Mail sent successfully to ${data}`,
        ORG_USER_CONFIGURATION_ENABLED: 'Feature configuration enabled successfully for user or org',
        DEFAULT_PROJECT_TITLE: "Untitled project",
        DEFAULT_PROJECT_DESCRIPTION: "",
        SIGNED_OUT_SUCCESSFULLY: 'Successfully signed out'
    }
}


module.exports = {
    errorMessages,
    successMessages
}