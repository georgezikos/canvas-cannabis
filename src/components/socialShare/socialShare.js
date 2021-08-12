const $facebookShareBtn = $('.blog-post__share-link--facebook');
const $linkedInShareBtn = $('.blog-post__share-link--linkedin');
const $emailShareBtn = $('.blog-post__share-link--email');
const facebookShareLink = 'https://www.facebook.com/sharer/sharer.php?u=';
let currentPost = encodeURIComponent($(location).attr('href'));

// construct the linkedin URL in this order, checkout their docs to understand what each parameter is doing
const linkedInShareLinkBase =
  'https://www.linkedin.com/shareArticle?mini=true&url=';
const linkedInShareLinkTitle = '&title=Canvas%20Cannabis';
const linkedInShareLinkSource = '&source=https%3A%2F%2Fcanvascannabis.ca%2F';
const linkedInShareLinkSummary = '&summary=Short%20summary';

const emailShareLink = 'mailto:?subject=test&body=';
let gmailShareLink = `https://mail.google.com/mail/?view=cm&to=&su={title}&body=${currentPost}`;

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
  $emailShareBtn.attr('href', gmailShareLink);
};

export default socialShare;
