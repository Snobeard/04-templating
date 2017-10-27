'use strict';

let articleView = {};

// DONE: Where possible, refactor methods into arrow functions, including the document.ready() method at the bottom.

// COMMENTED: How do arrow functions affect the context of "this"? How did you determine if a function could be refactored?
// We can refactor all functions that do not involve a contextual "this", such as the event handlers, but the individual selectors that require "this" cannot be refactored.

articleView.populateFilters = () => {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let optionTemplate = $('#testTemplate').html();
      let compiledOption = Handlebars.compile(optionTemplate);
      let context = {data: $(this).data('author')};
      if ($(`#author-filter option[value="${context.data}"]`).length ===0) {
        $('#author-filter').append(compiledOption({data: $(this).data('author')}));
      }

      let context2 = {data: $(this).data('category')};

      if ($(`#category-filter option[value="${context2.data}"]`).length === 0) {
        $('#category-filter').append(compiledOption(context2));
      }
    }
  });
};

articleView.buildFilters = (act, inact) => {
  $(`#${act}-filter`).on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-${act}="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $(`#${inact}-filter`).val('');
  });
}

articleView.handleAuthorFilter = () => {
  articleView.buildFilters('author', 'category');
};

articleView.handleCategoryFilter = () => {
  articleView.buildFilters('category', 'author');
};

articleView.handleMainNav = () => {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

$(document).ready(() => {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
})
