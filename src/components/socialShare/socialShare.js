function socialWindow(url) {
  let left = (screen.width - 570) / 2;
  let top = (screen.height - 570) / 2;
  let params =
    'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
    top +
    ',left=' +
    left;
  window.open(url, 'NewWindow', params);
}

const socialShare = () => {
  let pageUrl = encodeURIComponent(document.URL);
  let tweet = encodeURIComponent(
    $("meta[property='og:description']").attr('content')
  );
  $('blog-post__share-link.blog-post__share-link--facebook').on(
    'click',
    function () {
      url = 'https://www.facebook.com/sharer.php?u=' + pageUrl;
      socialWindow(url);
    }
  );
  $('blog-post__share-link.blog-post__share-link--instagram').on(
    'click',
    function () {
      url =
        'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + tweet;
      socialWindow(url);
    }
  );
  $('blog-post__share-link.blog-post__share-link--facebook').on(
    'click',
    function () {
      url = 'mailto:?Subject=' + tweet + '&amp;Body=' + pageurl;
      socialWindow(url);
    }
  );
};

export default socialShare;
