function addTimer() {
  const iconUrl = chrome.extension.getURL('chat-icon.svg');

  const $gitYakTab = $('.js-repo-nav')
    .find('[itemprop="itemListElement"]')
    .eq(1)
    .clone()
    .find('a')
    .html(`
      Gityak
      <span class="Counter" >0</span>
    `);

  $gitYakTab.appendTo('.js-repo-nav');

  $gitYakTab.on('click', (e) => {
    $('.reponav-item').removeClass('selected');

    e.preventDefault();
    $(e.target).addClass(['js-selected-navigation-item', 'selected']);
    const url = chrome.extension.getURL('bg.png');
    $('.new-discussion-timeline').html(`<img src="${url}">`);
  });

}

$(document).on('pjax:complete', addTimer);
addTimer();