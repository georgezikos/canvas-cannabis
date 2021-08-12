import '/Users/georgezikos/Workspaces/Lifelike Local/Clients/Canvas Cannabis/Web Development/Delivery/External Files/node_modules/jquery-social-share/jquery.simpleSocialShare.js';

const socialShare = () => {
  const shareLinks = $('.blog-post__share-link');
  shareLinks.simpleSocialShare();
};

export default socialShare;
