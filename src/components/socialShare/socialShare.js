const $facebookShareBtn = $('.blog-post__share-link--facebook');
const $linkedInShareBtn = $('.blog-post__share-link--linkedin');
const facebookShareLink = 'https://www.facebook.com/sharer/sharer.php?u=';
// const linkedInShareLink =
//   'https://www.linkedin.com/sharing/share-offsite/?url=';
let currentPost = encodeURIComponent($(location).attr('href'));

// construct the linkedin URL in this order, checkout their docs to understand what each parameter is doing
const linkedInShareLinkBase =
  'https://www.linkedin.com/shareArticle?mini=true&url=';
const linkedInShareLinkTitle = '&title=Canvas%20Cannabis';
const linkedInShareLinkSource = '&source=https%3A%2F%2Fcanvascannabis.ca%2F';
const linkedInShareLinkSummary = '&summary=Short%20summary';

// const linkedInShareLink = {
//   base: ,
//   url: currentPost,
//   title: ,
//   source: ,
//   summary: ,
// }

const socialShare = () => {
  $facebookShareBtn.attr('href', `${facebookShareLink}${currentPost}`);
  $linkedInShareBtn.attr(
    'href',
    `${linkedInShareLinkBase}${currentPost}${linkedInShareLinkTitle}${linkedInShareLinkSource}${linkedInShareLinkSummary}`
  );
};

export default socialShare;
