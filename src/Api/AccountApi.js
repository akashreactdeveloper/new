import baseurl from "./baseURL";

// Function to prepare the API payload
export const prepareAccountData = (formData) => {
    return {
        customer_id: formData.customer_id,
        account_name: formData.accountName,
        account_owner_mailbox_address: formData.emailId,
        full_name: formData.fullName,
        company_name: formData.companyName,
        time_zone: formData.timeZone.label,
        status: "active", // Assuming default status
    };
};

// Function to create a new account
export const createAccount = async (accountData) => {
    try {
        const response = await fetch(`${baseurl}createAccount`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(accountData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create account");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Let the calling function handle the error
    }
};

// Function to fetch all accounts for a customer
export const fetchAccounts = async (customerId) => {
    try {
        const response = await fetch(`${baseurl}getAllAccounts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ customer_id: customerId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch accounts");
        }

        const result = await response.json();
        return result.accounts;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Let the calling function handle the error
    }
};

// Function to fetch account details
export const getAccountDetails = async (accountId) => {
    try {
        const response = await fetch(`${baseurl}getAccountDetail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ account_id: accountId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch account details");
        }

        const result = await response.json();
        // console.log("Account details:", result.accounts);
        return result.accounts;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Let the calling function handle the error
    }
}



// Function to update account details
export const updateAccount = async (accountId, accountData) => {

    try {
        const response = await fetch(`${baseurl}updateAccountDetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ account_id: accountId, ...accountData }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to update account");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Let the calling function handle the error
    }


}



export const deleteAccount = async (accountId) => {
    try {
        const response = await fetch(`${baseurl}deleteAccount`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ account_id: accountId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to delete account");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Let the calling function handle the error
    }
}