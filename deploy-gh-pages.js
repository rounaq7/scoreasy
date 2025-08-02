const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting GitHub Pages deployment...');

try {
  // Step 1: Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('cd client && npm install', { stdio: 'inherit' });
  
  // Step 2: Build the project
  console.log('🔨 Building the project...');
  execSync('cd client && npm run build', { stdio: 'inherit' });
  
  // Step 3: Create gh-pages branch if it doesn't exist
  console.log('🌿 Setting up gh-pages branch...');
  try {
    execSync('git checkout gh-pages', { stdio: 'inherit' });
  } catch (error) {
    // Branch doesn't exist, create it
    execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
    execSync('git rm -rf .', { stdio: 'inherit' });
  }
  
  // Step 4: Copy build files to root
  console.log('📁 Copying build files...');
  execSync('cp -r client/build/* .', { stdio: 'inherit' });
  
  // Step 5: Add and commit files
  console.log('💾 Committing changes...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  
  // Step 6: Push to gh-pages branch
  console.log('🚀 Pushing to GitHub Pages...');
  execSync('git push origin gh-pages', { stdio: 'inherit' });
  
  // Step 7: Switch back to main branch
  execSync('git checkout main', { stdio: 'inherit' });
  
  console.log('✅ Deployment completed successfully!');
  console.log('🌐 Your site will be available at: https://rounaq7.github.io/scoreasy');
  console.log('⏰ It may take a few minutes for changes to appear.');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} 