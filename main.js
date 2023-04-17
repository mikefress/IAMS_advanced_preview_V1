const myBanners = [
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_160x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_300x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_300x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_300x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_320x480',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_320x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_728x90',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_1_970x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_160x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_300x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_300x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_300x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_320x480',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_320x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_728x90',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_2_970x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_160x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_300x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_300x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_300x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_320x480',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_320x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_728x90',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_3_970x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_160x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_300x250',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_300x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_300x600',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_320x480',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_320x50',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_728x90',
'IAMS_test_CELEBRATIONS_AND_CONNECTIONS_4_970x250',
'IAMS_test_DIGESTIVE_HEALTH_1_160x600',
'IAMS_test_DIGESTIVE_HEALTH_1_300x250',
'IAMS_test_DIGESTIVE_HEALTH_1_300x50',
'IAMS_test_DIGESTIVE_HEALTH_1_300x600',
'IAMS_test_DIGESTIVE_HEALTH_1_320x480',
'IAMS_test_DIGESTIVE_HEALTH_1_320x50',
'IAMS_test_DIGESTIVE_HEALTH_1_728x90',
'IAMS_test_DIGESTIVE_HEALTH_1_970x250',
'IAMS_test_DIGESTIVE_HEALTH_2_160x600',
'IAMS_test_DIGESTIVE_HEALTH_2_300x250',
'IAMS_test_DIGESTIVE_HEALTH_2_300x50',
'IAMS_test_DIGESTIVE_HEALTH_2_300x600',
'IAMS_test_DIGESTIVE_HEALTH_2_320x480',
'IAMS_test_DIGESTIVE_HEALTH_2_320x50',
'IAMS_test_DIGESTIVE_HEALTH_2_728x90',
'IAMS_test_DIGESTIVE_HEALTH_2_970x250',
'IAMS_test_GENERAL_UNWELNESS_1__160x600',
'IAMS_test_GENERAL_UNWELNESS_1__300x250',
'IAMS_test_GENERAL_UNWELNESS_1__300x50',
'IAMS_test_GENERAL_UNWELNESS_1__300x600',
'IAMS_test_GENERAL_UNWELNESS_1__320x480',
'IAMS_test_GENERAL_UNWELNESS_1__320x50',
'IAMS_test_GENERAL_UNWELNESS_1__728x90',
'IAMS_test_GENERAL_UNWELNESS_1__970x250',
'IAMS_test_GENERAL_UNWELNESS_2_160x600',
'IAMS_test_GENERAL_UNWELNESS_2_300x250',
'IAMS_test_GENERAL_UNWELNESS_2_300x50',
'IAMS_test_GENERAL_UNWELNESS_2_300x600',
'IAMS_test_GENERAL_UNWELNESS_2_320x480',
'IAMS_test_GENERAL_UNWELNESS_2_320x50',
'IAMS_test_GENERAL_UNWELNESS_2_728x90',
'IAMS_test_GENERAL_UNWELNESS_2_970x250',
'IAMS_test_GENERAL_UNWELNESS_4_160x600',
'IAMS_test_GENERAL_UNWELNESS_4_300x250',
'IAMS_test_GENERAL_UNWELNESS_4_300x50',
'IAMS_test_GENERAL_UNWELNESS_4_300x600',
'IAMS_test_GENERAL_UNWELNESS_4_320x480',
'IAMS_test_GENERAL_UNWELNESS_4_320x50',
'IAMS_test_GENERAL_UNWELNESS_4_728x90',
'IAMS_test_GENERAL_UNWELNESS_4_970x250',
'IAMS_test_HEALTHY_SOLUTIONS_1_160x600',
'IAMS_test_HEALTHY_SOLUTIONS_1_300x250',
'IAMS_test_HEALTHY_SOLUTIONS_1_300x50',
'IAMS_test_HEALTHY_SOLUTIONS_1_300x600',
'IAMS_test_HEALTHY_SOLUTIONS_1_320x480',
'IAMS_test_HEALTHY_SOLUTIONS_1_320x50',
'IAMS_test_HEALTHY_SOLUTIONS_1_728x90',
'IAMS_test_HEALTHY_SOLUTIONS_1_970x250',
'IAMS_test_HEALTHY_SOLUTIONS_2_160x600',
'IAMS_test_HEALTHY_SOLUTIONS_2_300x250',
'IAMS_test_HEALTHY_SOLUTIONS_2_300x50',
'IAMS_test_HEALTHY_SOLUTIONS_2_300x600',
'IAMS_test_HEALTHY_SOLUTIONS_2_320x480',
'IAMS_test_HEALTHY_SOLUTIONS_2_320x50',
'IAMS_test_HEALTHY_SOLUTIONS_2_728x90',
'IAMS_test_HEALTHY_SOLUTIONS_2_970x250',
'IAMS_test_HEALTHY_SOLUTIONS_3_160x600',
'IAMS_test_HEALTHY_SOLUTIONS_3_300x250',
'IAMS_test_HEALTHY_SOLUTIONS_3_300x50',
'IAMS_test_HEALTHY_SOLUTIONS_3_300x600',
'IAMS_test_HEALTHY_SOLUTIONS_3_320x480',
'IAMS_test_HEALTHY_SOLUTIONS_3_320x50',
'IAMS_test_HEALTHY_SOLUTIONS_3_728x90',
'IAMS_test_HEALTHY_SOLUTIONS_3_970x250',
'IAMS_test_HEALTHY_SOLUTIONS_4_160x600',
'IAMS_test_HEALTHY_SOLUTIONS_4_300x250',
'IAMS_test_HEALTHY_SOLUTIONS_4_300x50',
'IAMS_test_HEALTHY_SOLUTIONS_4_300x600',
'IAMS_test_HEALTHY_SOLUTIONS_4_320x480',
'IAMS_test_HEALTHY_SOLUTIONS_4_320x50',
'IAMS_test_HEALTHY_SOLUTIONS_4_728x90',
'IAMS_test_HEALTHY_SOLUTIONS_4_970x250',
'IAMS_test_HUMAN_PROXY_1__160x600',
'IAMS_test_HUMAN_PROXY_1__300x250',
'IAMS_test_HUMAN_PROXY_1__300x50',
'IAMS_test_HUMAN_PROXY_1__300x600',
'IAMS_test_HUMAN_PROXY_1__320x480',
'IAMS_test_HUMAN_PROXY_1__320x50',
'IAMS_test_HUMAN_PROXY_1__728x90',
'IAMS_test_HUMAN_PROXY_1__970x250',
'IAMS_test_HUMAN_PROXY_2__160x600',
'IAMS_test_HUMAN_PROXY_2__300x250',
'IAMS_test_HUMAN_PROXY_2__300x50',
'IAMS_test_HUMAN_PROXY_2__300x600',
'IAMS_test_HUMAN_PROXY_2__320x480',
'IAMS_test_HUMAN_PROXY_2__320x50',
'IAMS_test_HUMAN_PROXY_2__728x90',
'IAMS_test_HUMAN_PROXY_2__970x250',
'IAMS_test_IMMUNITY_ISSUES_1_160x600',
'IAMS_test_IMMUNITY_ISSUES_1_300x250',
'IAMS_test_IMMUNITY_ISSUES_1_300x50',
'IAMS_test_IMMUNITY_ISSUES_1_300x600',
'IAMS_test_IMMUNITY_ISSUES_1_320x480',
'IAMS_test_IMMUNITY_ISSUES_1_320x50',
'IAMS_test_IMMUNITY_ISSUES_1_728x90',
'IAMS_test_IMMUNITY_ISSUES_1_970x250',
'IAMS_test_IMMUNITY_ISSUES_2_160x600',
'IAMS_test_IMMUNITY_ISSUES_2_300x250',
'IAMS_test_IMMUNITY_ISSUES_2_300x50',
'IAMS_test_IMMUNITY_ISSUES_2_300x600',
'IAMS_test_IMMUNITY_ISSUES_2_320x480',
'IAMS_test_IMMUNITY_ISSUES_2_320x50',
'IAMS_test_IMMUNITY_ISSUES_2_728x90',
'IAMS_test_IMMUNITY_ISSUES_2_970x250',
'IAMS_test_IMMUNITY_ISSUES_3_160x600',
'IAMS_test_IMMUNITY_ISSUES_3_300x250',
'IAMS_test_IMMUNITY_ISSUES_3_300x50',
'IAMS_test_IMMUNITY_ISSUES_3_300x600',
'IAMS_test_IMMUNITY_ISSUES_3_320x480',
'IAMS_test_IMMUNITY_ISSUES_3_320x50',
'IAMS_test_IMMUNITY_ISSUES_3_728x90',
'IAMS_test_IMMUNITY_ISSUES_3_970x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_160x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_300x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_300x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_300x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_320x480',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_320x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_728x90',
'IAMS_test_PLUGGED_IN_AND_SPORTY_1_970x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_160x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_300x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_300x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_300x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_320x480',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_320x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_728x90',
'IAMS_test_PLUGGED_IN_AND_SPORTY_2_970x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_160x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_300x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_300x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_300x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_320x480',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_320x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_728x90',
'IAMS_test_PLUGGED_IN_AND_SPORTY_3_970x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_160x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_300x250',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_300x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_300x600',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_320x480',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_320x50',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_728x90',
'IAMS_test_PLUGGED_IN_AND_SPORTY_4_970x250',
'IAMS_test_PUPPY_TO_ADULT_1__160x600',
'IAMS_test_PUPPY_TO_ADULT_1__300x250',
'IAMS_test_PUPPY_TO_ADULT_1__300x50',
'IAMS_test_PUPPY_TO_ADULT_1__300x600',
'IAMS_test_PUPPY_TO_ADULT_1__320x480',
'IAMS_test_PUPPY_TO_ADULT_1__320x50',
'IAMS_test_PUPPY_TO_ADULT_1__728x90',
'IAMS_test_PUPPY_TO_ADULT_1__970x250',
'IAMS_test_PUPPY_TO_ADULT_2_160x600',
'IAMS_test_PUPPY_TO_ADULT_2_300x250',
'IAMS_test_PUPPY_TO_ADULT_2_300x50',
'IAMS_test_PUPPY_TO_ADULT_2_300x600',
'IAMS_test_PUPPY_TO_ADULT_2_320x480',
'IAMS_test_PUPPY_TO_ADULT_2_320x50',
'IAMS_test_PUPPY_TO_ADULT_2_728x90',
'IAMS_test_PUPPY_TO_ADULT_2_970x250',
'IAMS_test_TRADE_DOWN_1_160x600',
'IAMS_test_TRADE_DOWN_1_300x250',
'IAMS_test_TRADE_DOWN_1_300x50',
'IAMS_test_TRADE_DOWN_1_300x600',
'IAMS_test_TRADE_DOWN_1_320x480',
'IAMS_test_TRADE_DOWN_1_320x50',
'IAMS_test_TRADE_DOWN_1_728x90',
'IAMS_test_TRADE_DOWN_1_970x250',
'IAMS_test_TRADE_DOWN_2_160x600',
'IAMS_test_TRADE_DOWN_2_300x250',
'IAMS_test_TRADE_DOWN_2_300x50',
'IAMS_test_TRADE_DOWN_2_300x600',
'IAMS_test_TRADE_DOWN_2_320x480',
'IAMS_test_TRADE_DOWN_2_320x50',
'IAMS_test_TRADE_DOWN_2_728x90',
'IAMS_test_TRADE_DOWN_2_970x250',
'IAMS_test_TRADE_UP_1_160x600',
'IAMS_test_TRADE_UP_1_300x250',
'IAMS_test_TRADE_UP_1_300x50',
'IAMS_test_TRADE_UP_1_300x600',
'IAMS_test_TRADE_UP_1_320x480',
'IAMS_test_TRADE_UP_1_320x50',
'IAMS_test_TRADE_UP_1_728x90',
'IAMS_test_TRADE_UP_1_970x250',
'IAMS_test_TRADE_UP_2_160x600',
'IAMS_test_TRADE_UP_2_300x250',
'IAMS_test_TRADE_UP_2_300x50',
'IAMS_test_TRADE_UP_2_300x600',
'IAMS_test_TRADE_UP_2_320x480',
'IAMS_test_TRADE_UP_2_320x50',
'IAMS_test_TRADE_UP_2_728x90',
'IAMS_test_TRADE_UP_2_970x250',
'IAMS_test_TRADE_UP_3_160x600',
'IAMS_test_TRADE_UP_3_300x250',
'IAMS_test_TRADE_UP_3_300x50',
'IAMS_test_TRADE_UP_3_300x600',
'IAMS_test_TRADE_UP_3_320x480',
'IAMS_test_TRADE_UP_3_320x50',
'IAMS_test_TRADE_UP_3_728x90',
'IAMS_test_TRADE_UP_3_970x250'
];

const myRefs = [];


function loadReferencesBanners(e) {
  const bannerHolder = document.getElementById('bannerHolder')
  bannerHolder.replaceChildren()
  const mainTitle = document.createElement('h2');
  mainTitle.innerText = e.srcElement.textContent;
  bannerHolder.append(mainTitle)
  

  for (const banner of myBanners) {
    if (banner.includes(e.srcElement.textContent)) {
      const sectionTitle = banner.replace('IAMS_test_', '').replace('_160x600', '');
      const title1 = document.createElement('a');
      title1.innerText = '160x600'
      title1.setAttribute('href', `./banners/${banner}/index.html`)
      title1.setAttribute('target', '_blank')
      bannerHolder.append(title1)
      const iframe1 = document.createElement('iframe')
      iframe1.setAttribute('width', 160)
      iframe1.setAttribute('height', 600)
      iframe1.setAttribute('frameborder', 0)
      iframe1.setAttribute('src', `./banners/${banner}/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe1)
      // 300x50
      const title2 = document.createElement('a');
      title2.innerText = '300x50'
      title2.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_300x50/index.html`)
      title2.setAttribute('target', '_blank')
      bannerHolder.append(title2)
      const iframe2 = document.createElement('iframe')
      iframe2.setAttribute('width', 300)
      iframe2.setAttribute('height', 50)
      iframe2.setAttribute('frameborder', 0)
      iframe2.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_300x50/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe2)
      // 320x50
      const title3 = document.createElement('a');
      title3.innerText = '320x50'
      title3.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_320x50/index.html`)
      title3.setAttribute('target', '_blank')
      bannerHolder.append(title3)
      const iframe3 = document.createElement('iframe')
      iframe3.setAttribute('width', 320)
      iframe3.setAttribute('height', 50)
      iframe3.setAttribute('frameborder', 0)
      iframe3.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_320x50/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe3)
      // 300x250
      const title4 = document.createElement('a');
      title4.innerText = '300x250'
      title4.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_300x250/index.html`)
      title4.setAttribute('target', '_blank')
      bannerHolder.append(title4)
      const iframe4 = document.createElement('iframe')
      iframe4.setAttribute('width', 300)
      iframe4.setAttribute('height', 250)
      iframe4.setAttribute('frameborder', 0)
      iframe4.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_300x250/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe4)
      // 300x600
      const title5 = document.createElement('a');
      title5.innerText = '300x600'
      title5.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_300x600/index.html`)
      title5.setAttribute('target', '_blank')
      bannerHolder.append(title5)
      const iframe5 = document.createElement('iframe')
      iframe5.setAttribute('width', 300)
      iframe5.setAttribute('height', 600)
      iframe5.setAttribute('frameborder', 0)
      iframe5.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_300x600/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe5)
      // 320x480
      const title6 = document.createElement('a');
      title6.innerText = '320x480'
      title6.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_320x480/index.html`)
      title6.setAttribute('target', '_blank')
      bannerHolder.append(title6)
      const iframe6 = document.createElement('iframe')
      iframe6.setAttribute('width', 320)
      iframe6.setAttribute('height', 480)
      iframe6.setAttribute('frameborder', 0)
      iframe6.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_320x480/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe6)
      // 728x90
      const title7 = document.createElement('a');
      title7.innerText = '728x90'
      title7.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_728x90/index.html`)
      title7.setAttribute('target', '_blank')
      bannerHolder.append(title7)
      const iframe7 = document.createElement('iframe')
      iframe7.setAttribute('width', 728)
      iframe7.setAttribute('height', 90)
      iframe7.setAttribute('frameborder', 0)
      iframe7.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_728x90/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe7)
      // 970x250
      const title8 = document.createElement('a');
      title8.innerText = '970x250'
      title8.setAttribute('href', `./banners/IAMS_test_${sectionTitle}_970x250/index.html`)
      title8.setAttribute('target', '_blank')
      bannerHolder.append(title8)
      const iframe8 = document.createElement('iframe')
      iframe8.setAttribute('width', 970)
      iframe8.setAttribute('height', 250)
      iframe8.setAttribute('frameborder', 0)
      iframe8.setAttribute('src', `./banners/IAMS_test_${sectionTitle}_970x250/index.html?cacheBuster=${Date.now()}${Math.floor(Math.random() * 1000)}`)
      bannerHolder.append(iframe8)
      break;
    }
  }
}


function init() {
  for (const banner of myBanners) {
    if (banner.endsWith('160x600')) {
      const section = document.createElement('section');
      section.classList.add('section');
      const title = document.createElement('h4');
      title.classList.add('title');
      const sectionTitle = banner.replace('IAMS_test_', '').replace('_160x600', '');
      title.innerText = sectionTitle;
      section.append(title)
      document.getElementById('refHolder').append(section)
      const bannerHolder = document.createElement('div')
      bannerHolder.classList.add('bannerHolder');
      bannerHolder.classList.add(sectionTitle)
      section.append(bannerHolder)
      title.addEventListener('click', loadReferencesBanners)
    }
  }
}
  