import dotenv from 'dotenv';
// NOTE:  JS files hoist imports; need to ensure dotenv is loaded before other files try to access process.env
// NOTE:  Path is relative to where node is initialized, not this file.
export default dotenv.config({ path: '.env.dev' });
