/**
 * Google Analytics tracking implementation for Baffy's Computer Solutions
 * Optimized for SEO and performance
 */

// Load the Google Analytics script
(function() {
  // Configure the Google Analytics tracking
  window.GoogleAnalyticsObject = 'ga';
  window.ga = window.ga || function() {
    (window.ga.q = window.ga.q || []).push(arguments);
  };
  window.ga.l = +new Date();

  // Create the tracker
  window.ga('create', 'GA_MEASUREMENT_ID', 'auto');
  
  // Enable enhanced link attribution for better tracking of outbound links
  window.ga('require', 'linkid');
  
  // Send the initial pageview
  window.ga('send', 'pageview', {
    'page': location.pathname + location.search + location.hash,
    'title': document.title
  });

  // Track outbound links
  document.addEventListener('click', function(event) {
    const link = event.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check if this is an outbound link
    if (href.indexOf('http') === 0 && !href.includes(document.location.hostname)) {
      window.ga('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: href,
        transport: 'beacon'
      });
    }
  });

  // Track downloads
  document.addEventListener('click', function(event) {
    const link = event.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check for common download file extensions
    const extensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.zip', '.exe', '.dmg'];
    if (extensions.some(ext => href.endsWith(ext))) {
      window.ga('send', 'event', {
        eventCategory: 'Download',
        eventAction: 'click',
        eventLabel: href,
        transport: 'beacon'
      });
    }
  });

  // Track mailto links
  document.addEventListener('click', function(event) {
    const link = event.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    if (href.startsWith('mailto:')) {
      window.ga('send', 'event', {
        eventCategory: 'Email',
        eventAction: 'click',
        eventLabel: href,
        transport: 'beacon'
      });
    }
  });

  // Track social media shares
  document.addEventListener('click', function(event) {
    const link = event.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    const socialNetworks = {
      'facebook.com': 'Facebook',
      'twitter.com': 'Twitter',
      'linkedin.com': 'LinkedIn',
      'instagram.com': 'Instagram',
      'pinterest.com': 'Pinterest'
    };
    
    for (const [domain, network] of Object.entries(socialNetworks)) {
      if (href.includes(domain)) {
        window.ga('send', 'event', {
          eventCategory: 'Social',
          eventAction: 'click',
          eventLabel: network,
          transport: 'beacon'
        });
      }
    }
  });

  // Load the Google Analytics script asynchronously
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.google-analytics.com/analytics.js';
  document.head.appendChild(script);
})();