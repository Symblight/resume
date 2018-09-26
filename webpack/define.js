const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  is_generate_css: isProduction,
  is_production: isProduction,
  is_development: isDevelopment
};
