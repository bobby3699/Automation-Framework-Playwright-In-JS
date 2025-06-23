import 'dotenv/config';
import { createPool } from 'mysql2/promise';

/**
 * Simplified Database Utility Class for handling basic database operations
 */
class DatabaseUtility {
    constructor() {
        this.pool = null;
        this.config = {
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        };
    }

    /**
     * Initialize database connection pool
     * @returns {Promise<void>}
     */
    async initializeConnection() {
        try {
            this.pool = createPool(this.config);
            console.log('Database connection pool initialized successfully');
        } catch (error) {
            console.error('Error initializing database connection:', error.message);
            throw error;
        }
    }

    /**
     * Execute a database query with parameters
     * @param {string} query - SQL query to execute
     * @param {Array} params - Query parameters
     * @returns {Promise<Array>} Query results
     */
    async executeQuery(query, params = []) {
        try {
            if (!this.pool) {
                await this.initializeConnection();
            }
            const [results] = await this.pool.execute(query, params);
            return results;
        } catch (error) {
            console.error('Error executing query:', error.message);
            console.error('Query:', query);
            console.error('Parameters:', params);
            throw error;
        }
    }

    /**
     * Close the database connection pool
     * @returns {Promise<void>}
     */
    async closeConnection() {
        if (this.pool) {
            await this.pool.end();
            console.log('Database connection closed');
            this.pool = null;
        }
    }
}

export default new DatabaseUtility();
