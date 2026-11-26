cd ~/Projects/portfolio || exit 1

echo "========== STAGING CORRECTED FILE =========="
git add src/sections/Projects.jsx && \

echo "========== FORMATTING CHECK ==========" && \
git diff --cached --check && \

echo "========== STAGED CHANGES ==========" && \
git diff --cached --stat && \

echo "========== COMMITTING CHANGES ==========" && \
git commit -m "feat: showcase AI cluster architecture and reorder featured projects" && \

echo "========== PUSHING TO GITHUB ==========" && \
git push origin main && \

echo "========== FINAL GIT STATUS ==========" && \
git status && \

echo "========== LATEST COMMIT ==========" && \
git --no-pager log -1 --oneline
