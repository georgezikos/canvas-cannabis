const $facebookShareBtn = $('.blog-post__share-link--facebook');
const $linkedInShareBtn = $('.blog-post__share-link--linkedin');
const facebookShareLink = 'https://www.facebook.com/sharer/sharer.php?u=';
const linkedInShareLinkBase =
  'https://www.linkedin.com/shareArticle?mini=true&url=';
const linkedInShareLinkTitle = 'Canvas%20Cannabis';
const linkedInShareLinkSource = '&source=https%3A%2F%2Fcanvascannabis.ca%2F';
const linkedInShareLinkSummary = '&summary=Short%20summary';
let currentPost = encodeURIComponent($(location).attr('href'));

const socialShare = () => {
  $facebookShareBtn.attr('href', `${facebookShareLink}${currentPost}`);
};

export default socialShare;
