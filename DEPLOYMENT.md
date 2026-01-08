# Deployment Guide

This project uses GitHub Actions for CI/CD to automatically deploy to your server when code is pushed to the `main` branch.

## Prerequisites

1. A server with Docker and Docker Compose installed
2. SSH access to the server
3. Git installed on the server

## Setting up GitHub Secrets

To enable automatic deployment, you need to configure the following secrets in your GitHub repository:

1. Go to your GitHub repository: `https://github.com/viuppalapati/Dr-Herwitz`
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following:

### Required Secrets:

- **SSH_HOST**: Your server's IP address or domain name (e.g., `192.168.1.100` or `example.com`)
- **SSH_USER**: The SSH username for your server (e.g., `root` or `ubuntu`)
- **SSH_PRIVATE_KEY**: Your private SSH key content (usually found in `~/.ssh/id_rsa`)

### Optional Secrets:

- **SSH_PORT**: SSH port (defaults to `22` if not provided)
- **DEPLOY_PATH**: Deployment directory path on the server (defaults to `/opt/dr-herwitz` if not provided)

## How to get your SSH Private Key

On your local machine or server, run:
```bash
cat ~/.ssh/id_rsa
```

Copy the entire output (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`) and paste it as the value for `SSH_PRIVATE_KEY` secret.

## Server Setup

On your server, make sure:

1. Docker is installed:
```bash
docker --version
docker-compose --version
```

2. The deployment directory has proper permissions:
```bash
sudo mkdir -p /opt/dr-herwitz
sudo chown -R $USER:$USER /opt/dr-herwitz
```

3. Docker network exists (will be created automatically if it doesn't):
```bash
docker network create web
```

## How it Works

1. When you push code to the `main` branch, GitHub Actions automatically triggers
2. The workflow:
   - Connects to your server via SSH
   - Pulls the latest code from GitHub
   - Stops the running containers
   - Builds a new Docker image
   - Starts the containers with the new image
   - Cleans up old Docker images

## Manual Deployment Trigger

You can also manually trigger a deployment:
1. Go to **Actions** tab in GitHub
2. Select **Build and Deploy** workflow
3. Click **Run workflow**
4. Select the branch (usually `main`)
5. Click **Run workflow**

## Troubleshooting

### GitHub Actions not showing up

- Make sure the `.github/workflows/deploy.yml` file is committed and pushed to the repository
- Check that the workflow file is in the correct location: `.github/workflows/deploy.yml`

### Deployment fails with SSH errors

- Verify your SSH credentials (host, user, private key)
- Test SSH connection manually: `ssh -i ~/.ssh/id_rsa user@host`
- Ensure the SSH key doesn't have a passphrase, or use a key without one for CI/CD

### Docker errors on server

- Check Docker is running: `sudo systemctl status docker`
- Verify docker-compose is installed: `docker-compose --version`
- Check server disk space: `df -h`

## Viewing Deployment Logs

1. Go to the **Actions** tab in your GitHub repository
2. Click on the latest workflow run
3. Expand the **Deploy to server** step to see detailed logs
