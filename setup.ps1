# Check if Node.js is installed
$nodeVersion = node --version
if (-not $?) {
    Write-Host "Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
}

# Check if npm is installed
$npmVersion = npm --version
if (-not $?) {
    Write-Host "npm is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
}

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Create required directories
Write-Host "Creating required directories..."
New-Item -ItemType Directory -Force -Path "public/images" | Out-Null
New-Item -ItemType Directory -Force -Path "public/images/testimonials" | Out-Null

Write-Host "Setup complete! You can now run 'npm run dev' to start the development server." 