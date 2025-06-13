import { executeQuery } from '../utils/Database-utils';

class DatabaseHelper {
    static async initializeTestTables() {
        const createTestDataTable = `
            CREATE TABLE IF NOT EXISTS test_data (
                id INT AUTO_INCREMENT PRIMARY KEY,
                test_name VARCHAR(255) NOT NULL,
                test_data JSON,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS test_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                status VARCHAR(50) DEFAULT 'active',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        try {
            await executeQuery(createTestDataTable);
            await executeQuery(createUsersTable);
            console.log('Test tables created successfully');
        } catch (error) {
            console.error('Error creating test tables:', error);
            throw error;
        }
    }
}

export default DatabaseHelper;