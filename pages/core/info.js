// Phần info này bố trí như sau
//Cần up website lên rồi check với schema validator xem thực sự ổn chưa
//Tối ưu hóa thẻ h1 h2 h3 cho từng page, sửa các đầu mục, phần description đã sửa xong

//images và các serviceList là các mục ko cần sửa gì

//Viết hướng dẫn và đào tạo người sửa trang này

/*
businessOpeningTimeInput - Cần thay đổi cái này, nhập đầu vào giờ làm việc của tiệm
processedBusinessOpeningTime - Cái này kiểm soát thông tin hiển thị trên website của tiệm
changedInfo - Các thông tin cần thay đổi thường xuyên
processedInfo - Là các thông tin được xử lý từ thằng changedInfo

menu - Danh sách các tab trên thanh navigation
serviceCategory - Danh sách các hạng mục dịch vụ của tiệm (Nhóm dịch vụ lớn, để trong đó có các dịch vụ con cụ thể)
seoInfo - Là các mảnh ghép từ khóa
seoKeyword - Là các từ khóa để làm SEO
imageAlt - Là các thẻ Alt cho ảnh, đã vào công thức

headerInput - Là những thông tin đc dùng để nhập vào mục Header
schemaInput - Là những thông tin đc dùng để nhập vào mục schemaData
schemaData - Là những thông tin sẽ hiển thị lên Schema của website
  Giờ mở cửa của tiệm khai báo lên Schema
  Nếu ko mở ngày nào thì xóa ngày đó đi trong mục openingHoursSpecification

pageContent - Chứa tất cả các nội dung của website trừ phần Button
button - Tất cả về các nút, nội dung của nút, link nút sẽ dẫn đến khi click vào
images - Đường link của tất cả các ảnh trên website
serviceList1 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList2 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList3 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList4 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList5 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList6 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList7 - Danh sách các dịch vụ thuộc serviceCategory tương ứng

Các mục cần thay đổi thông tin khi tạo website mới
changedInfo
serviceList
*/


//  thongTinTiem1 gồm:
//    1. Thông tin cơ bản của tiệm
//    2. Các ảnh của tiệm
//    3. Các đường link của tiệm
//    4. Nội dung các nút

//  thongtinTiem2 gồm:
//    1. Các nội dung của tiệm
//    2. Các thẻ Alt

//Cần bố trí lại, xem những thông tin gì cần sửa thì cho riêng vào 1 mục

//Cần sửa mục nào thì ghi hết vào đây
  /*
  businessOpeningTimeInput
  personReviewAuthorName
  */
  const businessOpeningTimeInput = {
    //Thời gian làm việc của tiệm
    monOpeningTime : "09:30",
    monClosingTime : "18:30",
  
    tueOpeningTime : "09:30",
    tueClosingTime : "18:30",
  
    wedOpeningTime : "09:30",
    wedClosingTime : "18:30",
  
    thuOpeningTime : "09:30",
    thuClosingTime : "18:30",
  
    friOpeningTime : "09:30",
    friClosingTime : "18:30",
  
    satOpeningTime : "09:30",
    satClosingTime : "18:30",
  
    sunOpeningTime : "",
    sunClosingTime : "",
  }

const processedBusinessOpeningTime = {
  //Thời gian làm việc của tiệm hiển thị trong file time-schedule.js
  //Đóng cửa ngày nào chỉnh sửa ngày đó thành Closed
  workingTimeMon : "Monday: " + businessOpeningTimeInput.monOpeningTime + "–" + businessOpeningTimeInput.monClosingTime,
  workingTimeTue : "Tuesday: " + businessOpeningTimeInput.tueOpeningTime + "–" + businessOpeningTimeInput.tueClosingTime,
  workingTimeWed : "Wednesday: " + businessOpeningTimeInput.wedOpeningTime + "–" + businessOpeningTimeInput.wedClosingTime,
  workingTimeThu : "Thursday: " + businessOpeningTimeInput.thuOpeningTime + "–" + businessOpeningTimeInput.thuClosingTime,
  workingTimeFri : "Friday: " + businessOpeningTimeInput.friOpeningTime + "–" + businessOpeningTimeInput.friClosingTime,
  workingTimeSat : "Saturday: " + businessOpeningTimeInput.satOpeningTime + "–" + businessOpeningTimeInput.satClosingTime,
  workingTimeSun : "Sunday: Closed " + businessOpeningTimeInput.sunOpeningTime + "" + businessOpeningTimeInput.sunClosingTime,
}

const changedInfo = {   
  businessName: "Premier nails & Beauty",
  businessAddressLevel1: "5 High St",
  businessAddressLevel2: "Shepperton",
  businessAddressLevel3: "Surrey",
  businessAddressLevel4: "England",
  businessCountry: "United Kingdom",
  businessGeoRegionCode: "GB",

  //Tra cứu tên thành phố trong https://www.geonames.org/GB/administrative-division-united-kingdom.html và điền vào mã code tương ứng
  businessAddressDivisionCode: "SRY",

  businessPostCode: "TW17 9AJ",
  

  businessPhoneNumber: "+441932988249",

  //Website tiệm KO có dấu / ở cuối
  businessWebsite: "https://premier-nails-beauty.web.app",

  linkBookingMap: "",
  linkBookingApp: "https://bit.ly/47poiJN",
  linkToMap: "https://maps.app.goo.gl/xrD6jKJUyMr6cPfG9",

  

  //Mở Google Maps tiệm, zoom sát vào, chuột phải 
  geoLatitude: 51.39575338502951,
  geoLongitude: -0.4492530686086429,

  //Code xác minh của website trên Google Search
  metaGoogleSiteVerification: "",

  //iframe map
  iframeMapLink : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.5389500174742!2d-0.45180093491144085!3d51.39556616141688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876750689ba4abd%3A0xa166a26a36b6fc3c!2sPremier%20nails%20%26%20Beauty!5e0!3m2!1sen!2sus!4v1699234704932!5m2!1sen!2sus",

  // Các ảnh của tiệm
  ogImage:"https://premier-nails-beauty.web.app/images/desktop-nail-salon-happy-customer-1.jpg",
  icon:"/icon.jpg",
  businessLogo:"/logo.jpg",
}

const menu = {
  mainMenu1: "Home",
  mainMenu2: "About us",
  mainMenu3: "Book Now",
  mainMenu4: "Services",
  mainMenu5: "Salon Policies",
  mainMenu6: "Contact us",

  linkToMainMenu1: "/",
  linkToMainMenu2: "/about-us",
  linkToMainMenu3: "/appointment",
  linkToMainMenu4: "/services",
  linkToMainMenu5: "/our-policy",
}

const serviceCategory = {
  //Danh sách các dịch vụ của tiệm
  serviceCategory1:"Nail extensions",
  serviceCategory2:"Shellac color",
  serviceCategory3:"Original polish",
  serviceCategory4:"SNS / Dipping powder",
  serviceCategory5:"Extra",
  serviceCategory6:"Beauty treatments",
  serviceCategory7:"Gel BIAB",
  serviceCategory8:"Princess nails",

  mobileLinkToServiceCategory1: "/services#m-service-list-1",
  mobileLinkToServiceCategory2: "/services#m-service-list-2",
  mobileLinkToServiceCategory3: "/services#m-service-list-3",
  mobileLinkToServiceCategory4: "/services#m-service-list-4",
  mobileLinkToServiceCategory5: "/services#m-service-list-5",
  mobileLinkToServiceCategory6: "/services#m-service-list-6",
  mobileLinkToServiceCategory7: "/services#m-service-list-7",
  mobileLinkToServiceCategory8: "/services#m-service-list-8",
  
  tabletLinkToServiceCategory1: "/services#t-service-list-1",
  tabletLinkToServiceCategory2: "/services#t-service-list-2",
  tabletLinkToServiceCategory3: "/services#t-service-list-3",
  tabletLinkToServiceCategory4: "/services#t-service-list-4",
  tabletLinkToServiceCategory5: "/services#t-service-list-5",
  tabletLinkToServiceCategory6: "/services#t-service-list-6",
  tabletLinkToServiceCategory7: "/services#t-service-list-7",
  tabletLinkToServiceCategory8: "/services#t-service-list-8",

  desktopLinkToServiceCategory1: "/services#d-service-list-1",
  desktopLinkToServiceCategory2: "/services#d-service-list-2",
  desktopLinkToServiceCategory3: "/services#d-service-list-3",
  desktopLinkToServiceCategory4: "/services#d-service-list-4",
  desktopLinkToServiceCategory5: "/services#d-service-list-5",
  desktopLinkToServiceCategory6: "/services#d-service-list-6",
  desktopLinkToServiceCategory7: "/services#d-service-list-7",
  desktopLinkToServiceCategory8: "/services#d-service-list-8",
}

const seoInfo = {
  keyword1: "nail salon",
  keyword2: "nails",

  serviceKeyword1: "acrylic nails",
  serviceKeyword2: "nails extension",
  serviceKeyword3: "shellac nails",
  serviceKeyword4: "manicure",
  serviceKeyword5: "pedicure",

  localKeyword1: changedInfo.businessAddressLevel2,
  localKeyword2: changedInfo.businessAddressLevel3,
}

const seoKeyword = {
  seoKeyword1: seoInfo.keyword1 + " in " + seoInfo.localKeyword1,
  seoKeyword15: seoInfo.keyword1 + " " + seoInfo.localKeyword1,
  seoKeyword2: seoInfo.keyword1 + " " + seoInfo.localKeyword2,

  seoKeyword3: seoInfo.keyword2 + " " + seoInfo.localKeyword1,
  seoKeyword4: seoInfo.keyword2 + " " + seoInfo.localKeyword2,

  seoKeyword5: seoInfo.serviceKeyword1 + " " + seoInfo.localKeyword1,
  seoKeyword6: seoInfo.serviceKeyword1 + " " + seoInfo.localKeyword2,

  seoKeyword7: seoInfo.serviceKeyword2 + " " + seoInfo.localKeyword1,
  seoKeyword8: seoInfo.serviceKeyword2 + " " + seoInfo.localKeyword2,

  seoKeyword9: seoInfo.serviceKeyword3 + " " + seoInfo.localKeyword1,
  seoKeyword10: seoInfo.serviceKeyword3 + " " + seoInfo.localKeyword2,

  seoKeyword11: seoInfo.serviceKeyword4 + " " + seoInfo.localKeyword1,
  seoKeyword12: seoInfo.serviceKeyword4 + " " + seoInfo.localKeyword2,

  seoKeyword13: seoInfo.serviceKeyword5 + " " + seoInfo.localKeyword1,
  seoKeyword14: seoInfo.serviceKeyword5 + " " + seoInfo.localKeyword2,
}

const imageAlt = {
  //Ảnh customer review - customer-review.js
  cusReviewImage1Alt: seoKeyword.seoKeyword1,
  cusReviewImage2Alt: seoKeyword.seoKeyword2,
  cusReviewImage3Alt: seoKeyword.seoKeyword3,
  cusReviewImage4Alt: seoKeyword.seoKeyword4,
  cusReviewImage5Alt: seoKeyword.seoKeyword1,
  
  //Thanh Mobile Bottom Nav
  BottomNavButton1IconAlt: seoKeyword.seoKeyword1,
  BottomNavButton2IconAlt: seoKeyword.seoKeyword2,
  BottomNavButton3IconAlt: seoKeyword.seoKeyword3,
  
  //Ảnh Footer
  footerImagePhoneIconAlt: seoKeyword.seoKeyword1,
  footerImageMapPointerIconAlt: seoKeyword.seoKeyword1,

  //Ảnh trang about cho 3 giao diện
  mobileAboutUsImage1Alt: seoKeyword.seoKeyword1,
  mobileAboutUsImage2Alt: seoKeyword.seoKeyword2,
  mobileAboutUsImage3Alt: seoKeyword.seoKeyword3,
  mobileAboutUsImage4Alt: seoKeyword.seoKeyword4,
  mobileAboutUsImage5Alt: seoKeyword.seoKeyword5,

  tabletAboutUsImage1Alt: seoKeyword.seoKeyword1,
  tabletAboutUsImage2Alt: seoKeyword.seoKeyword2,
  tabletAboutUsImage3Alt: seoKeyword.seoKeyword3,
  tabletAboutUsImage4Alt: seoKeyword.seoKeyword4,
  tabletAboutUsImage5Alt: seoKeyword.seoKeyword5,

  desktopAboutUsImage1Alt: seoKeyword.seoKeyword1,
  desktopAboutUsImage2Alt: seoKeyword.seoKeyword2,
  desktopAboutUsImage3Alt: seoKeyword.seoKeyword3,

  desktopAboutUsDongVienImage1Alt: seoKeyword.seoKeyword1,
  desktopAboutUsDongVienImage2Alt: seoKeyword.seoKeyword2,
  desktopAboutUsDongVienImage3Alt: seoKeyword.seoKeyword3,

  section1Image1Alt: seoKeyword.seoKeyword1,
  section2Image1Alt: seoKeyword.seoKeyword2,
  section3Image1Alt: seoKeyword.seoKeyword3,
  section5Image1Alt: seoKeyword.seoKeyword4,
  section6Image1Alt: seoKeyword.seoKeyword5,
  section7Image1Alt: seoKeyword.seoKeyword6,
  section7Image2Alt: seoKeyword.seoKeyword7,

  mobileCarouselImage1Alt: seoKeyword.seoKeyword8,
  mobileCarouselImage2Alt: seoKeyword.seoKeyword9,
  mobileCarouselImage3Alt: seoKeyword.seoKeyword10,
  
  tabletCarouselImage1Alt: seoKeyword.seoKeyword8,
  tabletCarouselImage2Alt: seoKeyword.seoKeyword9,
  tabletCarouselImage3Alt: seoKeyword.seoKeyword10,
  
  desktopCarouselImage1Alt: seoKeyword.seoKeyword8,
  desktopCarouselImage2Alt: seoKeyword.seoKeyword9,
  desktopCarouselImage3Alt: seoKeyword.seoKeyword10,
  
  LocationImage1Alt: seoKeyword.seoKeyword1,

  serviceList1Image1Alt: seoKeyword.seoKeyword7,
  serviceList1Image2Alt: seoKeyword.seoKeyword7,
  serviceList1Image3Alt: seoKeyword.seoKeyword7,
  serviceList1Image4Alt: seoKeyword.seoKeyword8,
  serviceList1Image5Alt: seoKeyword.seoKeyword8,
  
  serviceList2Image1Alt: seoKeyword.seoKeyword9,
  serviceList2Image2Alt: seoKeyword.seoKeyword9,
  serviceList2Image3Alt: seoKeyword.seoKeyword9,
  serviceList2Image4Alt: seoKeyword.seoKeyword10,
  serviceList2Image5Alt: seoKeyword.seoKeyword10,
    
  serviceList3Image1Alt: seoKeyword.seoKeyword11,
  serviceList3Image2Alt: seoKeyword.seoKeyword12,
  serviceList3Image3Alt: seoKeyword.seoKeyword13,
  serviceList3Image4Alt: seoKeyword.seoKeyword14,
  serviceList3Image5Alt: seoKeyword.seoKeyword14,
  
  serviceList4Image1Alt: "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image2Alt: "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image3Alt: "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image4Alt: "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image5Alt: "hair wash" + " " + changedInfo.businessAddressLevel2,
  
  serviceList5Image1Alt: "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image2Alt: "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image3Alt: "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image4Alt: "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image5Alt: "nail design" + " " + changedInfo.businessAddressLevel2,
  
  serviceList6Image1Alt: "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image2Alt: "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image3Alt: "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image4Alt: "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image5Alt: "waxing" + " " + changedInfo.businessAddressLevel2,

  serviceList7Image1Alt: "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image2Alt: "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image3Alt: "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image4Alt: "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image5Alt: "facial" + " " + changedInfo.businessAddressLevel2,
}

const processedInfo = {
  //Xử lý Slogan tiệm
  slogan: "Clean and Professional " + seoKeyword.seoKeyword1 + " - " +  changedInfo.businessName,

  //Dòng full address của tiệm
  businessAddress: changedInfo.businessAddressLevel1 + ", " + changedInfo.businessAddressLevel2 + ", " + changedInfo.businessPostCode,

  callBusiness: `tel:${changedInfo.businessPhoneNumber}`,

  //Link booking thực sự của tiệm sửa ở đây
  businessBookingLink: changedInfo.linkBookingApp,

  //offer.js
  offerTitle: "Our Offers and Benefits",
  offerDescription: "Free all cold drink and hot drink, chocolate, sweet or snack",
  offerHeading: "Our offers:",
  offerContent1: "✅10% for Student. ",
  offerContent2: "✅Refer a friend to get 5 pounds voucher. ",
  offerContent3: "✅Group from 3 people get 10% with the main treatment",
}

const headerInput = {
  headerTitle: "The best " + seoKeyword.seoKeyword15 + " - " + changedInfo.businessName,
  metaDescription: "Best " + seoKeyword.seoKeyword1 + ". " + "Friendly staff and excellent service. Treat yourself or enjoy with friends and family",
  relIcon: changedInfo.icon,
  relCanonical: changedInfo.businessWebsite,
  metaGeoPosition: changedInfo.geoLatitude + ", " + changedInfo.geoLongitude,
  metaGeoPlaceName: changedInfo.businessAddressLevel2 + ", " + changedInfo.businessCountry,
  metaGeoRegion: changedInfo.businessGeoRegionCode + "-" + changedInfo.businessAddressDivisionCode,
  
  metaOgSiteName: changedInfo.businessName,
  metaOgLocale: "en_GB",

  metaOgTitle: processedInfo.slogan,
  metaOgImage: changedInfo.ogImage,
  metaOgImageWidth: "1920",
  metaOgImageHeight: "1073",

  metaGoogleSiteVerification: changedInfo.metaGoogleSiteVerification,
}


//Cần sửa trong mục này
const schemaInput = {
  schemaType: "NailSalon",
  schemaName: changedInfo.businessName,
  schemaStreetAddress: changedInfo.businessAddressLevel1,
  schemaAddressLocality: changedInfo.businessAddressLevel2,
  schemaAddressRegion: changedInfo.businessAddressLevel4,
  schemaPostalCode: changedInfo.businessPostCode,
  schemaAddressCountry: changedInfo.businessGeoRegionCode,

  schemaImage1: "/images/nail-extension-1.jpg",
  schemaImage2: "/images/nail-extension-2.jpg",
  schemaImage3: "/images/nail-extension-3.jpg",
  schemaImage4: "/images/nail-extension-4.jpg",
  schemaImage5: "/images/nail-extension-5.jpg",
  schemaImage6: "/images/gel-nails-shellac-nails-1.jpg",
  schemaImage7: "/images/gel-nails-shellac-nails-2.jpg",
  schemaImage8: "/images/gel-nails-shellac-nails-3.jpg",
  schemaImage9: "/images/gel-nails-shellac-nails-4.jpg",
  schemaImage10: "/images/gel-nails-shellac-nails-5.jpg",
  schemaImage11: "/images/nail-design-1.jpg",
  schemaImage12: "/images/nail-design-2.jpg",
  schemaImage13: "/images/nail-design-3.jpg",
  schemaImage14: "/images/nail-design-4.jpg",
  schemaImage15: "/images/nail-design-5.jpg",
  schemaImage16: "/images/pedicure-1.jpg",
  schemaImage17: "/images/pedicure-2.jpg",
  schemaImage18: "/images/pedicure-3.jpg",
  schemaImage19: "/images/pedicure-4.jpg",
  schemaImage20: "/images/pedicure-5.jpg",


  schemaTelephone: changedInfo.businessPhoneNumber,

  //Thời gian làm việc của tiệm
  schemaMonOpeningTime: businessOpeningTimeInput.monOpeningTime,
  schemaMonClosingTime: businessOpeningTimeInput.monClosingTime,

  schemaTueOpeningTime: businessOpeningTimeInput.tueOpeningTime,
  schemaTueClosingTime: businessOpeningTimeInput.tueClosingTime,

  schemaWedOpeningTime: businessOpeningTimeInput.wedOpeningTime,
  schemaWedClosingTime: businessOpeningTimeInput.wedClosingTime,

  schemaThuOpeningTime: businessOpeningTimeInput.thuOpeningTime,
  schemaThuClosingTime: businessOpeningTimeInput.thuClosingTime,

  schemaFriOpeningTime: businessOpeningTimeInput.friOpeningTime,
  schemaFriClosingTime: businessOpeningTimeInput.friClosingTime,

  schemaSatOpeningTime: businessOpeningTimeInput.satOpeningTime,
  schemaSatClosingTime: businessOpeningTimeInput.satClosingTime,

  schemaSunOpeningTime: businessOpeningTimeInput.sunOpeningTime,
  schemaSunClosingTime: businessOpeningTimeInput.sunClosingTime,

  //Logo
  schemaLogo: changedInfo.businessWebsite + changedInfo.businessLogo,

  //Đơn vị tiền tệ chấp nhận thanh toán
  schemaCurrenciesAccepted: "GBP",
  schemaPaymentAccepted: ["cash", "credit card"],

  schemaPriceRange: "££",
  //Cần đổi tên khách
  schemaPersonReviewAuthorName: "Maddy Burgess",
  //Xem điểm review trung bình của tiệm là bao nhiêu
  schemaRatingValue: "4.6",
  schemaBestRating: "5",

  schemaGeoLatitude: 51.39575338502951,
  schemaLongitude: -0.4492530686086429,

  schemaUrl: changedInfo.businessWebsite,

  schemaHasMap: changedInfo.linkToMap,
  schemaKeywords: [seoKeyword.seoKeyword1, 
                  seoKeyword.seoKeyword2,
                  seoKeyword.seoKeyword3,
                  seoKeyword.seoKeyword4,
                  seoKeyword.seoKeyword5,
                  seoKeyword.seoKeyword6,
                  seoKeyword.seoKeyword7,
                  seoKeyword.seoKeyword8,
                  seoKeyword.seoKeyword9,
                  seoKeyword.seoKeyword10,
                  seoKeyword.seoKeyword11,
                  seoKeyword.seoKeyword12,
              ],
  schemaSlogan: processedInfo.slogan,
  schemaDescription: headerInput.metaDescription,
}

//Dữ liệu schema
const schemaData = {
  "@context": "http://schema.org",
  "@type": schemaInput.schemaType,
  "name": schemaInput.schemaName,
  "image": [
    schemaInput.schemaImage1,
    schemaInput.schemaImage2,
    schemaInput.schemaImage3,
    schemaInput.schemaImage4,
    schemaInput.schemaImage5,
    schemaInput.schemaImage6,
    schemaInput.schemaImage7,
    schemaInput.schemaImage8,
    schemaInput.schemaImage9,
    schemaInput.schemaImage10,
    schemaInput.schemaImage11,
    schemaInput.schemaImage12,
    schemaInput.schemaImage13,
    schemaInput.schemaImage14,
    schemaInput.schemaImage15,
    schemaInput.schemaImage16,
    schemaInput.schemaImage17,
    schemaInput.schemaImage18,
    schemaInput.schemaImage19,
    schemaInput.schemaImage20,
   ],
  "telephone": schemaInput.schemaTelephone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": schemaInput.schemaStreetAddress,
    "addressLocality": schemaInput.schemaAddressLocality,
    "addressRegion": schemaInput.schemaAddressRegion,
    "postalCode": schemaInput.schemaPostalCode,
    "addressCountry": schemaInput.schemaAddressCountry,
  },
  "currenciesAccepted": schemaInput.schemaCurrenciesAccepted,
  "paymentAccepted": schemaInput.schemaPaymentAccepted,
  "logo": schemaInput.schemaLogo,
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": schemaInput.schemaRatingValue,
      "bestRating": schemaInput.schemaBestRating,
    },
    "author": {
      "@type": "Person",
      "name": schemaInput.schemaPersonReviewAuthorName,
    },
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": schemaInput.schemaGeoLatitude,
    "longitude": schemaInput.schemaLongitude,
  },
  "url": schemaInput.schemaUrl,
  "priceRange": schemaInput.schemaPriceRange,
  //Giờ mở cửa của tiệm khai báo lên Schema
  //Nếu ko mở ngày nào thì xóa ngày đó đi
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": schemaInput.schemaMonOpeningTime,
      "closes": schemaInput.schemaMonOpeningTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": schemaInput.schemaTueOpeningTime,
      "closes": schemaInput.schemaTueClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": schemaInput.schemaWedOpeningTime,
      "closes": schemaInput.schemaWedClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": schemaInput.schemaThuOpeningTime,
      "closes": schemaInput.schemaThuClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": schemaInput.schemaFriOpeningTime,
      "closes": schemaInput.schemaFriClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": schemaInput.schemaSatOpeningTime,
      "closes": schemaInput.schemaSatClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": schemaInput.schemaSunOpeningTime,
      "closes": schemaInput.schemaSunClosingTime,
    },
  ],
  "hasMap": schemaInput.schemaHasMap,
  "keywords": schemaInput.schemaKeywords,
  "slogan": schemaInput.schemaSlogan,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Book an appointment or asking question",
    "telephone": schemaInput.schemaTelephone,
  },
  "description": schemaInput.schemaDescription,
}

//Nội dung trên phần thân trang thì cho vào đây
const pageContent = {
  //our-story.js
  ourStoryHeading: "Our " + seoKeyword.seoKeyword1 + " story",
  ourStoryDescription: "Located at " + changedInfo.businessAddressLevel1 + ", we are a nail shop in " + changedInfo.businessAddressLevel2 + ". Skilled manicurists and pedicurists look forward to bringing you the best products and services. We are always researching and learning the best products and services, trendy nails, to bring more and more satisfaction to customers who are coming to us. The salon provides car parking facilities and drinks machines of all kinds, our modern pedicure chairs come equipped with a full-body massage system.",

  //dong-vien-1.js
  section1Heading: "We are " + seoKeyword.seoKeyword3 + " experienced manicurists and pedicurists",
  section1Description: "Are you looking for nail salon in " + changedInfo.businessAddressLevel2 + "? One of the best nail salon in " + changedInfo.businessAddressLevel3 + "? We are proud to say that here we are. We can give you amazing nails with our acrylic extensions and great relaxation with our manicure and pedicure services. We cater to both men and women. You can rest assured and get a sense of satisfaction when you come to us",

  //dong-vien-2.js
  section2Heading: "Always clean",
  section2Description: "We are committed to the safety and well being of our customer therefore we always maintain our clean environment, clean work stations, clean employees, and sterilization practices.",

  //dong-vien-3.js
  section3Heading: "Always leading And Ethical",
  section3Description: "Having been in the nail industry for a long time, and wanting to provide the best " + changedInfo.businessAddressLevel2 + " nail services, we guarantee to bring you the best experience ever. Our mission is to provide our customers with the ultimate pampering experience beginning with a beverage in one hand, a social scene in-between and a stunning set of services.",

  // nhan-manh-1.js
  section4Heading: "The best " + seoKeyword.seoKeyword1,

  // nhan-manh-2.js
  section5Heading: "EXPERIENCE UNMATCHED NAIL CARE",
  section5Description: "Step into our " + seoKeyword.seoKeyword15 + " for a pampering nail care experience like no other. Our team of skilled technicians at " + changedInfo.businessName + " will help you select the best nail polish and acrylic options to meet your needs and preferences. 😊💅",

  // nhan-manh-3.js
  section6Heading: "OUR MISSION",
  section6Description: "Our " + seoKeyword.seoKeyword15 + " is more than just a place to get your nails done - it's a place to unwind and recharge. Let us help you feel your best with our wide range of nail care services and personalized attention. 😊💅",


  // nhan-manh-4.js
  section7Heading: "SERVICES",
  section7Description: "Experience the ultimate in nail care and pampering at our nail salon " + changedInfo.businessAddressLevel2 + ". Our expert technicians will help you choose the perfect nail polish color or acrylic extension to match your style and preferences, leaving you with gorgeous nails and a renewed sense of confidence.",

  // nhan-manh-5.js
  section8Heading: "UNWIND & INDULGE",
  section8Description: "Getting your nails done should be a fun and memorable experience, and at " + changedInfo.businessName + ", we couldn't agree more! We believe that our " + changedInfo.businessAddressLevel2 + " nail salon is the perfect place to unwind and treat yourself to some much-needed pampering. Our skilled technicians will help you select the best nail polish and acrylic options to meet your needs and preferences, and we offer a wide range of colors to suit every occasion.⁣",

  carouselHeading: "Transform your nails and feel your best with our top-notch nail salon " + changedInfo.businessAddressLevel2,

  customerReviewHeading: "WHAT OUR CUSTOMERS SAY",
  customerReviewDescription: "",

  //content-our-policy.js
  contentOurPolicyHeadingMain: "SALON POLICIES",
  contentOurPolicyHeadingSmall1: "Refunds",
  contentOurPolicyHeadingSmall2: "Guarantee",
  contentOurPolicyHeadingSmall3: "Tardiness",
  contentOurPolicyHeadingSmall4: "Cancellations",
  contentOurPolicyHeadingSmall5: "Gift Cards",
  contentOurPolicyHeadingSmall6: "Notes",
  contentOurPolicyDescription1: "1. No cash refund will be given After you have left the salon.",
  contentOurPolicyDescription12: "2. If you have  any problem concern to the service, staff..., please inform us at the till point.",
  contentOurPolicyDescription13: "3. If you paid and left the salon, we will consider that you accepted and were happy with the complete result of the service / staff.",
  contentOurPolicyDescription14: "4. No refund will be given just because you simply changed your mind.",
  contentOurPolicyDescription2: "1. Traditional polish is not guaranteed",
  contentOurPolicyDescription22: "2. Enhancement / Gel polish services are Only guaranteed for 72 hrs from your visit. Within this time frame, it any problem due to the technical, please get in touch with us to shedule your free repair. If you can not come back within the free repair period, please still inform us and book an appointment at your most convenient.",
  contentOurPolicyDescription23: "3. We will not be responsible for any breakage, infection or damage nails after you Leave the salon.",
  contentOurPolicyDescription3: "Scheduled appointments have a 15 minute grace period to allow for traffic snarls or parking difficulties. If you anticipate that you will be later than 15 minutes, please call ahead to see if we have the availability to complete your service in full. One late client can throw off our entire schedule and cause our other clients to be late for their commitments. Therefore, if you arrive more than 15 minutes late, we reserve the right to refuse partial or complete services.",
  contentOurPolicyDescription41: "Appointments can be cancelled 24 hours in advance by calling or texting ",
  contentOurPolicyDescription42: ". Please give at least 24 hours notice so that we have the opportunity to offer your reserved time to another client on our waiting list. We understand that sometimes emergencies happen, and it's not always possible to give adequate notice when you can't make an appointment. However, be aware that if you repeatedly cancel appointments without proper notice, we reserve the right to ask for a non-refundable deposit to secure your next appointment.",
  contentOurPolicyDescription5: "The Gift Card and its balance are valid for a period of six months from the date of purchase. Your Gift Card will cease to be valid six months from the date of purchase and you will no longer be entitled to use it. ",
  contentOurPolicyDescription6: "Inform the salon if you have any allergy related to any chemical / substances. Before having any service(s)",
  contentOurPolicyDescription62: "Inform the salon immediately if you have any concern that you have any infection / reaction / condition with respect to your nails.",
  contentOurPolicyDescription63: "We will not take the any responsibilities for the loss of your personal belonging while you are having the service(s) in our salon.",

  //service-1.js
  serviceCategory1Description: "Our " + seoKeyword.seoKeyword15 + " offers a variety of nail extension services to enhance the length and beauty of your natural nails. We use high-quality products and skilled techniques to ensure a flawless and long-lasting result. Our experienced nail technicians can customize the length, shape, and color of your extensions to fit your unique style and preferences.",
    
  //service-2.js
  serviceCategory2Description: "Our gel nails and shellac nails are perfect for those who want a longer-lasting alternative to regular polish, without the risk of chipping or peeling. Choose from a wide range of colors and designs to create the perfect look for any occasion. Come and visit us today to experience the best gel nails and shellac nails in " + changedInfo.businessAddressLevel2 + "!",
  
  //service-3.js
  serviceCategory3Description: "Our manicure, pedicure, and nail shape and paint services are designed to make you feel pampered and beautiful. From perfectly shaped nails to vibrant colors, our experienced technicians are dedicated to delivering flawless results that exceed your expectations. We use only the highest quality products to ensure your nails remain strong, healthy, and beautiful. Treat yourself to an indulgent manicure or pedicure, and experience the luxurious relaxation and rejuvenation you deserve.",
  
  //service-4.js
  serviceCategory4Description: "Its name comes from the process itself since you apply a clear adhesive base to the nail, then dip your finger into a fine acrylic powder before repeating several more times. The result is a shiny, super durable mani that you can enjoy for a few weeks before heading back to the nail salon.",
  
  //service-5.js
  serviceCategory5Description: "Step into our " + seoKeyword.seoKeyword15 + " and let our team of experts bring your nail design dreams to life. With high-quality products and meticulous attention to detail, we guarantee that your nails will be the envy of all your friends. Come visit us and let us transform your nails into a work of art.",
  
  //service-6.js
  serviceCategory6Description: "We offer eyebrow, eyelash..., and waxing services. Our estheticians use the latest techniques and products to ensure your hair removal experience is as smooth and gentle as possible.",

  //service-7.js
  serviceCategory7Description1: "Builder Gel - Adds strength and thickness to nails, and remains natural looking, and it is available in a range of skin tones.",
  serviceCategory7Description2: "Builder Gel - Is stronger than regular gel polish, and is longer lasting.",
  serviceCategory7Description3: "Builder Gel - Helps natural nails to grow, it is lighter and gives a more natural feeling than acrylic powder.",
  serviceCategory7Description4: "Please not to leave your nails too long before your next appointment for an infill (or it's called a rebalance sometimes).",
  serviceCategory7Description5: "This is because when your nail apex has grown out, this un-balanced grow out nail may cause trauma for your natural nail underneath.",
  serviceCategory7Description6: "As the regrowth is far too much and it weakens the natural nail, it can affect the natural nails stability, the natural nail undereath, has not been checked and anything could be going on.",

  //service-8.js
  serviceCategory8Description: "We provide nail services at more favorable prices for girls under 12 years old. Note that girls need the consent of their parents or legal guardians when getting their nails done at the salon.",

  locationHeading: "LOCATION",
  timeScheduleHeading: "OPENING HOURS",
  
  copyrightContent: "© Copyright and Powered by Best Salon Marketing",
  copyrightWebsiteLink: "https://bestsalonmarketing.com",
}

const button = {
  //Các nút trên website
  button1Content: "Learn more",
  button1LinkToMobile: "#m-section-1",
  button1LinkToTablet: "#t-section-1",
  button1LinkToDesktop: "#d-section-1",

  button2Content: "View Our Services",
  button2LinkTo: menu.linkToMainMenu4,

  button3Content: "Book Appointment",
  button3LinkTo: menu.linkToMainMenu3,

  button4Content: "Find us",
  button4LinkTo: changedInfo.linkToMap,

  button5Content: "Full list of our services",
  button5LinkTo: menu.linkToMainMenu4,

  button6Content: "View details services",
  button6LinkToMobile: "/services/#m-service-list-1",
  button6LinkToTablet: "/services/#t-service-list-1",
  button6LinkToDesktop: "/services/#d-service-list-1",
  
  button7Content: "View details services",
  button7LinkToMobile: "/services/#m-service-list-2",
  button7LinkToTablet: "/services/#t-service-list-2",
  button7LinkToDesktop: "/services/#d-service-list-2",
  
  button8Content: "View details services",
  button8LinkToMobile: "/services/#m-service-list-3",
  button8LinkToTablet: "/services/#t-service-list-3",
  button8LinkToDesktop: "/services/#d-service-list-3",
  
  button9Content: "View details services",
  button9LinkToMobile: "/services/#m-service-list-4",
  button9LinkToTablet: "/services/#t-service-list-4",
  button9LinkToDesktop: "/services/#d-service-list-4",
  
  button10Content: "View details services",
  button10LinkToMobile: "/services/#m-service-list-5",
  button10LinkToTablet: "/services/#t-service-list-5",
  button10LinkToDesktop: "/services/#d-service-list-5",
  
  button11Content: "View details services",
  button11LinkToMobile: "/services/#m-service-list-6",
  button11LinkToTablet: "/services/#t-service-list-6",
  button11LinkToDesktop: "/services/#d-service-list-6",

  button12Content: "View details services",
  button12LinkToMobile: "/services/#m-service-list-7",
  button12LinkToTablet: "/services/#t-service-list-7",
  button12LinkToDesktop: "/services/#d-service-list-7",

  button13Content: "View details services",
  button13LinkToMobile: "/services/#m-service-list-8",
  button13LinkToTablet: "/services/#t-service-list-8",
  button13LinkToDesktop: "/services/#d-service-list-8",
}

const images = {
  //Ảnh ở Homepage carousel
  mobileCarouselImage1: "/images/mobile-nail-salon-happy-customer-1.jpg",
  mobileCarouselImage2: "/images/mobile-nail-salon-happy-customer-2.jpg",
  mobileCarouselImage3: "/images/mobile-nail-salon-happy-customer-3.jpg",

  tabletCarouselImage1: "/images/tablet-nail-salon-happy-customer-1.jpg",
  tabletCarouselImage2: "/images/tablet-nail-salon-happy-customer-2.jpg",
  tabletCarouselImage3: "/images/tablet-nail-salon-happy-customer-3.jpg",

  desktopCarouselImage1: "/images/desktop-nail-salon-happy-customer-1.jpg",
  desktopCarouselImage2: "/images/desktop-nail-salon-happy-customer-2.jpg",
  desktopCarouselImage3: "/images/desktop-nail-salon-happy-customer-3.jpg",
      //Ảnh ở Homepage khi vuốt xuống
  section5Image1: "/images/nail-extension-1.jpg",

  section6Image1: "/images/nail-extension-2.jpg",

  section7Image1: "/images/nail-extension-3.jpg",
  section7Image2: "/images/nail-extension-4.jpg",

  LocationImage1: "/images/nail-extension-11.jpg",

  serviceList1Image1: "/images/nail-extension-5.jpg",
  serviceList1Image2: "/images/nail-extension-6.jpg",
  serviceList1Image3: "/images/nail-extension-7.jpg",
  serviceList1Image4: "/images/nail-extension-8.jpg",
  serviceList1Image5: "/images/nail-extension-9.jpg",

  serviceList2Image1: "/images/gel-nails-shellac-nails-1.jpg",
  serviceList2Image2: "/images/gel-nails-shellac-nails-2.jpg",
  serviceList2Image3: "/images/gel-nails-shellac-nails-3.jpg",
  serviceList2Image4: "/images/gel-nails-shellac-nails-4.jpg",
  serviceList2Image5: "/images/gel-nails-shellac-nails-5.jpg",
  
  serviceList3Image1: "/images/pedicure-1.jpg",
  serviceList3Image2: "/images/pedicure-2.jpg",
  serviceList3Image3: "/images/pedicure-3.jpg",
  serviceList3Image4: "/images/pedicure-4.jpg",
  serviceList3Image5: "/images/pedicure-5.jpg",

  serviceList4Image1: "/images/nail-extension-20.jpg",
  serviceList4Image2: "/images/nail-extension-7.jpg",
  serviceList4Image3: "/images/gel-nails-shellac-nails-4.jpg",
  serviceList4Image4: "/images/",
  serviceList4Image5: "/images/hair-wash-5.jpg",

  serviceList5Image1: "/images/nail-design-1.jpg",
  serviceList5Image2: "/images/nail-design-2.jpg",
  serviceList5Image3: "/images/nail-design-3.jpg",
  serviceList5Image4: "/images/nail-design-4.jpg",
  serviceList5Image5: "/images/nail-design-5.jpg",

  serviceList6Image1: "/images/beauty-1.jpg",
  serviceList6Image2: "/images/beauty-2.jpg",
  serviceList6Image3: "/images/beauty-3.jpg",
  serviceList6Image4: "",
  serviceList6Image5: "",

  serviceList7Image1: "/images/gel-biab.jpg",
  serviceList7Image2: "/images/facial-2.jpg",
  serviceList7Image3: "/images/facial-3.jpg",
  serviceList7Image4: "/images/facial-4.jpg",
  serviceList7Image5: "/images/facial-5.jpg",

  serviceList8Image1: "/images/princess-nail.jpg",
  serviceList8Image2: "/images/facial-2.jpg",
  serviceLis8Image3: "/images/facial-3.jpg",
  serviceList8Image4: "/images/facial-4.jpg",
  serviceList8Image5: "/images/facial-5.jpg",

  //Ảnh trang about cho 3 giao diện

  mobileAboutUsImage1: "/images/mobile-nail-salon-1.jpg",
  mobileAboutUsImage2: "/images/mobile-nail-salon-2.jpg",
  mobileAboutUsImage3: "/images/mobile-nail-salon-3.jpg",

  tabletAboutUsImage1: "/images/tablet-nail-salon-1.jpg",
  tabletAboutUsImage2: "/images/tablet-nail-salon-2.jpg",
  tabletAboutUsImage3: "/images/tablet-nail-salon-3.jpg",

  desktopAboutUsImage1: "/images/desktop-nail-salon-1.jpg",
  desktopAboutUsImage2: "/images/desktop-nail-salon-2.jpg",
  desktopAboutUsImage3: "/images/desktop-nail-salon-3.jpg",

  desktopAboutUsDongVienImage1: "/images/nail-extension-15.jpg",
  desktopAboutUsDongVienImage2: "/images/nail-extension-16.jpg",
  desktopAboutUsDongVienImage3: "/images/nail-extension-17.jpg",

    //Ảnh cho phần động viên
  section1Image1: "/images/nail-extension-18.jpg",
  section2Image1: "/images/nail-extension-19.jpg",
  section3Image1: "/images/nail-extension-20.jpg",

  //Thanh Mobile Bottom Nav
  BottomNavButton1Icon: "/images/icons/icon-home.png",
  BottomNavButton1Content: "Home",
  BottomNavButton1LinkTo: "/",

  BottomNavButton2Icon: "/images/icons/icon-bussiness-services.png",
  BottomNavButton2Content: "Services",
  BottomNavButton2LinkTo: "/services",

  BottomNavButton3Icon: "/images/icons/icon-contact.png",
  BottomNavButton3Content: "Appointment now",  //Cái này chưa cho vào vì bị xuống dòng
  BottomNavButton3LinkTo: "",

  //Ảnh customer review - customer-review.js
  cusReviewImage1: "/images/nail-salon-customer-review-1.jpg",
  cusReviewImage2: "/images/nail-salon-customer-review-2.jpg",
  cusReviewImage3: "/images/nail-salon-customer-review-3.JPG",
  cusReviewImage4: "/images/nail-salon-customer-review-4.JPG",
  cusReviewImage5: "/images/nail-salon-customer-review-5.JPG",


  //Ảnh Footer
  footerImagePhoneIcon: "/images/icons/icon-phone-product.png",
  footerImageMapPointerIcon: "/images/icons/icon-google-maps-pointer.png",

  //Phần footer copyright
  //Phần này có thể chuyển sang chỗ khác
}



    
  
  //Danh sách các dịch vụ
  const serviceList1 = {
    service1 : "Acrylic Fullset with normal nail polish",
    service1Time : "45 mins",
    service1Price : "30",
    service1Description : "Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",

    service2 : "Acrylic Infill with normal nail polish",
    service2Time : "35 mins",
    service2Price : "23",
    service2Description : "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",

    service3 : "Acrylic Fullset with Shellac",
    service3Time : "1 hr",
    service3Price : "35",
    service3Description : "Our nails extension Shepperton service help your hands shine by adding a little length to your natural nail. We recommend choosing Shellac polish over normal nails polish, Shellac not only enhances the durability and longevity of your nails but also ensures a quick-drying, smudge-free finish. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips. ",

    service4 : "Acrylic Infill with Shellac",
    service4Time : "45 mins",
    service4Price : "28",
    service4Description : "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions. ",
    
    service5 : "Gel Powder Full Set with normal nail polish",
    service5Time : "45 mins",
    service5Price : "28",
    service5Description : "Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service6 : "Gel Powder Infill with normal nail polish",
    service6Time : "45 mins",
    service6Price : "20",
    service6Description : "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",

    service7 : "Full Set Pink & White",
    service7Time : "45 mins",
    service7Price : "40",
    service7Description : "Prepare to take all the compliments you’re lately getting. We’ve just added a new extension option for our clients: Pink and White! Chances are you know someone who loves the look, because it’s been trending for a while now. Now, with our " + seoKeyword.seoKeyword2 +" making it possible to infuse this unconventional color into your look – we’ve opened up an entire new world of possibilities.",

    service8 : "Infill Pink & White",
    service8Time : "45 mins",
    service8Price : "32",
    service8Description : "",

    service9 : "Full Set Ombre",
    service9Time : "45 mins",
    service9Price : "38",
    service9Description : "You could be the Queen of the Ombre nails, with the right technique. The technicians at our " + seoKeyword.seoKeyword2 + " will masterfully blend one color into another, creating a unique and beautiful look, and adding it to your finger tips.",

    service10 : "Infill Ombre",
    service10Time : "45 mins",
    service10Price : "30",
    service10Description : "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service11 : "Full Set Colour Powder",
    service11Time : "45 mins",
    service11Price : "40",
    service11Description : "Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service12 : "Infill Colour Powder (Same Colour)",
    service12Time : "45 mins",
    service12Price : "23",
    service12Description : "",
  
    service13 : "Infill Colour Powder (Different Colour)",
    service13Time : "45 mins",
    service13Price : "25",
    service13Description : "",
  
    service14 : "Acrylic Fullset on Feet with normal nail polish",
    service14Time : "45 mins",
    service14Price : "35",
    service14Description : "An acrylic extension on your toes is just the thing to give yourself a little extra pampering. Whether you just want to do something new for your nails or you’ve been looking for an excuse to treat yo-self. This could be a great option for you",
  
    service15 : "Acrylic Infill on Feet with normal nail polish",
    service15Time : "45 mins",
    service15Price : "30",
    service15Description : "",
  
    service16 : "Acrylic Fullset on Feet with Shellac",
    service16Time : "1 hr",
    service16Price : "40",
    service16Description : "With this extension on your feet, you will have them look absolutely amazing again. Get those feet painted with colours that are bright and pleasing to the eye. And when you're done, give them some extra love with a protective layer of Shellac",
  
    service17 : "Acrylic Infill on Feet with Shellac",
    service17Time : "1 hr",
    service17Price : "35",
    service17Description : "",
  
    service19 : "Take off Acrylic and Redone a Newset",
    service19Time : "1 hr",
    service19Price : "3 to 5",
    service19Description : "Extra from £3 to £5",
  
    service20 : "Take off Powder and Polish",
    service20Time : "30 mins",
    service20Price : "18",
    service20Description : "Take off then normal polish",
  
    service21 : "Take off Powder + Shellac",
    service21Time : "30 mins",
    service21Price : "30",
    service21Description : "Take off then Shellac",
  
    service22 : "Take off Powder + Manicure + Shellac",
    service22Time : "50 mins",
    service22Price : "35",
    service22Description : "Take off then Manicure and then Shellac",

    service26 : "Long nails extra",
    service26Time : "",
    service26Price : "5",
    service26Description : "",

    service27 : "Single Toe Nails",
    service27Time : "",
    service27Price : "5",
    service27Description : "",

    service29 : "Take off Acrylic and Redone Acrylic Fullset with normal nail polish",
    service29Time : "1 hr",
    service29Price : "35",
    service29Description : "",

    service30 : "Take off Acrylic and Redone Acrylic Fullset with Shellac",
    service30Time : "1 hr",
    service30Price : "40",
    service30Description : "",

    service31 : "Take off Ombre and Redone Ombre Fullset",
    service31Time : "1 hr",
    service31Price : "45",
    service31Description : "",

    service32 : "Dipping Powder SNS infill",
    service32Time : "40 mins",
    service32Price : "30",
    service32Description : "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails.",

    service33 : "Take off and Redone Dipping Powder SNS",
    service33Time : "1 hr",
    service33Price : "40",
    service33Description : "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails.",

    service34 : "Take off and Redone Acrylic Fullset on Feet with normal nail polish",
    service34Time : "1 hr",
    service34Price : "40",
    service34Description : "",

    service35 : "Take off and Redone Acrylic Fullset on Feet with Shellac",
    service35Time : "1 hr 15 mins",
    service35Price : "45",
    service35Description : "",

    service36 : "Take off Powder and Manicure with normal polish",
    service36Time : "35 mins",
    service36Price : "25",
    service36Description : "Take off powder and then do manicure",

    service37 : "Take off colour Powder and Redone a Newset",
    servicce37Time : "60 mins",
    service37Price : "45",
    service37Description : "",

    service38 : "Full set Acrylic French Tip",
    service38Time : "45 mins",
    service38Price : "40",
    service38Description : "",

    service39 : "Infill Acrylic French Tip",
    service39Time : "45 mins",
    service39Price : "35",
    service39Description : "",

    service40 : "Take off Acrylic Frech Tip and Redone Full set Acrylic French Tip",
    service40Time : "60 mins",
    service40Price : "45",
    service40Description : "",
    
    service41 : "Take off Pink & White and Redone a Newset",
    service41Time : "60 mins",
    service41Price : "45",
    service41Description : "",

    service42 : " ",
    service42Time : "30 mins",
    service42Price : "20",
    service42Description : "",

    service43 : "XXL Long nails extra",
    service43Time : "",
    service43Price : "15",
    service43Description : "",

    service44 : "XL Long nails extra",
    service44Time : "",
    service44Price : "10",
    service44Description : "",

    service45 : "Take off Powder and Pedicure with normal polish",
    service45Time : "35 mins",
    service45Price : "30",
    service45Description : "",

    service46 : "Take off Powder and Pedicure with gel polich",
    service46Time : "35 mins",
    service46Price : "35",
    service46Description : "",

    service47 : "Infill Colour Powder",
    service47Time : "45 mins",
    service47Price : "35",
    service47Description : "",

    }; 
  
  const serviceList2 = {
    service1 : "Nail shape with Shellac nails on hand",
    service1Time : "30 mins",
    service1Price : "23",
    service1Description : "",
  
    service2 : "Nail shape with Shellac nails on feet",
    service2Time : "30 mins",
    service2Price : "22",
    service2Description : "",

    service3 : "Manicure Shellac",
    service3Time : "40 mins",
    service3Price : "28",
    service3Description : "Include nails trimming, shaping, buffing, cuticle grooming, color and lotion massage",

    service4 : "Pedicure Shellac",
    service4Time : "40 mins",
    service4Price : "40",
    service4Description : "Include nails trimming, shaping, buffing, cuticle grooming, callus treatment, collagen mint scrub, color then hot towel wrap, and hot stone massage. Add £2 more for extra layer for strengthening and lasting",

    service5 : "Gel Polish Manicure & Pedicure",
    service5Time : "1 hr 25 mins",
    service5Price : "63",
    service5Description : "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish. Shellac pedicure and manicure lasts up to two weeks, it’s well worth the wait.",
  
    service6 : "Take off shellac and Redone Gel Polish on Hand",
    service6Time : "30 mins",
    service6Price : "25",
    service6Description : "",
  
    service7 : "Take off shellac and Redone Gel Polish on Feet",
    service7Time : "40 mins",
    service7Price : "25",
    service7Description : "",
  
    service8 : "Take off shellac",
    service8Time : "20 mins",
    service8Price : "8",
    service8Description : "Just take off shellac",

    service9 : "Take off shellac and Redone Normal Polish on Hand",
    service9Time : "30 mins",
    service9Price : "20",
    service9Description : "",

    service10 : "Take off shellac and Redone Normal Polish on Feet",
    service10Time : "40 mins",
    service10Price : "20",
    service10Description : "",

    service11: "Shellac with French",
    service11Time: "45 mins",
    service11Price: "28",
    service11Description: "",

    service12: "Manicure Shellac with French",
    service12Time: "60 mins",
    service12Price: "30",
    service12Description: "",

  };
  
  const serviceList3 = {
    service1 : "Manicure with normal polish",
    service1Time : "30 mins",
    service1Price : "20",
    service1Description : "A classic manicure is all you need to take great care of your hands and nails. Includes shaping, file, polish and moisturiser, cuticle, massage.",
 
    service2 : "Pedicure with normal polish",
    service2Time : "40 mins",
    service2Price : "30",
    service2Description : "A classic pedicure is all you need to take great care of your feet and nails. Includes scrub, dead skin, shape, file and polish, cuticle, moisturise, massage.",
    
    service3 : "Luxury Pedicure",
    service3Time : "40 mins",
    service3Price : "53",
    service3Description : "Get healthy, happy feet with the help of VOESH's Pedi in a Box Deluxe 4-Step pedicure system. This single-use pedicure kit contains a sea salt soak, sugar scrub, mud masque, and massage butter to detoxify, exfoliate, cleanse, and hydrate your skin. Plus Disposable Pedicure Pro Pack for use at the treatment or you can bring it home.",

    service4 : "Manicure & Pedicure with normal polish",
    service4Time : "1 hr 15 mins",
    service4Price : "45",
    service4Description : "Manicure includes shaping, file, polish and moisturiser, cuticle, massage. Pedicure includes scrub, dead skin, shape, file and polish, cuticle, moisturise, massage.",
  
    service5 : "Men's Manicure & Pedicure",
    service5Time : "1 hr 15 mins",
    service5Price : "40",
    service5Description : "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",

    service6 : "Shape & paint on hands",
    service6Time : "15 mins",
    service6Price : "15",
    service6Description : "Many people love traditional nail polish because it can easily to be take off, let Premier nails  & Beauty help you to paint them perfectly",

    service7 : "Shape & paint on toes",
    service7Time : "15 mins",
    service7Price : "15",
    service7Description : "Many people love traditional nail polish because it can easily to be take off, let Premier nails  & Beauty help you to paint them perfectly",

    service8 : "Smoothing Pedicure with normal polish",
    service8Time : "40 mins",
    service8Price : "35",
    service8Description : "Start with a Mineral Herbal Bath Soak, followed by a gentle massage and exfoliation using natural Body Liquid Lufra. After trimming and shaping the nails and cuticles, treat the heels with an allspice berry solution. Finish with a traditional lower leg massage using body Smoother solution, leaving your skin feeling silky.",

    service9 : "Smoothing Pedicure with gel polish",
    service9Time : "40 mins",
    service9Price : "40",
    service9Description : "Start with a Mineral Herbal Bath Soak, followed by a gentle massage and exfoliation using natural Body Liquid Lufra. After trimming and shaping the nails and cuticles, treat the heels with an allspice berry solution. Finish with a traditional lower leg massage using body Smoother solution, leaving your skin feeling silky.",

    service10 : "Icedancer Pedicure with normal polish",
    service10Time : "45 mins",
    service10Price : "40",
    service10Description : "Your feet have been long awaiting a rejuvenating pedicure. Say ahh… to a warm whirlpool soak with Mineral Herbal Bath. Then, enjoy a gentle massage and exfoliation using Walnut Husk Liquid Body Lufra. While the regular pedicure components are being attended to, a calf massage with the Invigorating Icedancer and a steamy towel wrap are added to restore vitality and energize the legs. Dry heels are also treated with the allspice berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for the ultimate experience.",

    service11 : "Icedancer Pedicure with gel polish",
    service11Time : "45 mins",
    service11Price : "45",
    service11Description : "Your feet have been long awaiting a rejuvenating pedicure. Say ahh… to a warm whirlpool soak with Mineral Herbal Bath. Then, enjoy a gentle massage and exfoliation using Walnut Husk Liquid Body Lufra. While the regular pedicure components are being attended to, a calf massage with the Invigorating Icedancer and a steamy towel wrap are added to restore vitality and energize the legs. Dry heels are also treated with the allspice berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for the ultimate experience.",

    service12 : "Firewalker Pedicure with normal polish",
    service12Time : "50 mins",
    service12Price : "45",
    service12Description : "Indulge in this guilt-free guilty pleasure. The Firewalker Pedicure will leave your feet and legs feeling amazing. Start with an Herbal Mineral Bath, followed by a blend of Grapefruit Body Bar and Walnut Body Lufra Exfoliating. Top it off with the Revitalizing Ice Dancer leg massage and a hot towel wrap to take your pedicure experience to a whole new level. Along with our famous Sole Solution heel treatment, finger pressure massage techniques using Firewalker Cream will relieve all tiredness. Finish with the ultimate softness of Baobab Body Butter. Served with a glass of champagne.",

    service13 : "Firewalker Pedicure with gel polish",
    service13Time : "50 mins",
    service13Price : "50",
    service13Description : "Indulge in this guilt-free guilty pleasure. The Firewalker Pedicure will leave your feet and legs feeling amazing. Start with an Herbal Mineral Bath, followed by a blend of Grapefruit Body Bar and Walnut Body Lufra Exfoliating. Top it off with the Revitalizing Ice Dancer leg massage and a hot towel wrap to take your pedicure experience to a whole new level. Along with our famous Sole Solution heel treatment, finger pressure massage techniques using Firewalker Cream will relieve all tiredness. Finish with the ultimate softness of Baobab Body Butter. Served with a glass of champagne.",

    service14 : "Smoothing Manicure with normal polish",
    service14Time : "30 mins",
    service14Price : "25",
    service14Description : "Start with a Mineral Herbal Bath Soak, then followed by a gentle massage and exfoliation with natural Body Liquid Lufra. After the nails and cuticles are carefully trimmed and shaped, the heels are treated with an allspice berry solution. Finish with a traditional lower leg massage using the Body Smoother solution, leaving your skin feeling silky.",

    service15 : "Smoothing Manicure with gel polish",
    service15Time : "30 mins",
    service15Price : "35",
    service15Description : "Start with a Mineral Herbal Bath Soak, then followed by a gentle massage and exfoliation with natural Body Liquid Lufra. After the nails and cuticles are carefully trimmed and shaped, the heels are treated with an allspice berry solution. Finish with a traditional lower leg massage using the Body Smoother solution, leaving your skin feeling silky.",

    service16 : "Icedancer Pedicure & Manicure with normal polish",
    service16Time : "70 mins",
    service16Price : "60",
    service16Description : "Your feet and hands have been long awaiting a rejuvenating pedicure and manicure. Say ahh… to a warm whirlpool soak with Mineral Herbal Bath. Then, enjoy a gentle massage and Walnut Husk Liquid Body Lufra exfoliation. While the regular pedicure components are being attended to, a calf massage with the Invigorating Icedancer and a steamy towel wrap are added to restore vitality and energize the legs. Dry heels are also treated with the allspice berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for the ultimate experience.",

    service17 : "Icedancer Pedicure & Manicure with gel polish",
    service17Time : "70 mins",
    service17Price : "75",
    service17Description : "Your feet and hands have been long awaiting a rejuvenating pedicure and manicure. Say ahh… to a warm whirlpool soak with Mineral Herbal Bath. Then, enjoy a gentle massage and Walnut Husk Liquid Body Lufra exfoliation. While the regular pedicure components are being attended to, a calf massage with the Invigorating Icedancer and a steamy towel wrap are added to restore vitality and energize the legs. Dry heels are also treated with the allspice berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for the ultimate experience.",

    service18 : "Smoothing Pedicure & Manicure with normal polish",
    service18Time : "65 mins",
    service18Price : "55",
    service18Description : "Start with a Mineral Herbal Bath Soak, followed by a gentle massage and exfoliation with natural Body Liquid Lufra. After the nails and cuticles are carefully trimmed and shaped, the heels are treated with an allspice berry solution. Finish with a traditional lower leg massage using the Body Smoother solution, leaving your skin feeling silky.",

    service19: "Smoothing Pedicure & Manicure with gel polish",
    service19Time : "65 mins",
    service19Price : "65",
    service19Description : "Start with a Mineral Herbal Bath Soak, followed by a gentle massage and exfoliation with natural Body Liquid Lufra. After the nails and cuticles are carefully trimmed and shaped, the heels are treated with an allspice berry solution. Finish with a traditional lower leg massage using the Body Smoother solution, leaving your skin feeling silky.",

    service20: "Firewalker Pedicure & Manicure with normal polish",
    service20Time : "80 mins",
    service20Price : "70",
    service20Description : "Indulge in this guilt-free pleasure. The Firewalker Pedicure & Manicure will leave your feet, legs, and hands feeling amazing. Start with an Herbal Mineral Bath, followed by a blend of Grapefruit Body Bar and Walnut Body Lufra Exfoliating. Top it off with the Revitalizing Ice Dancer leg massage and a hot towel wrap to elevate your pedicure experience. Along with our famous Sole Solution heel treatment, finger pressure massage techniques using Firewalker Cream will alleviate all tiredness. Finish with the ultimate softness of Baobab Body Butter. Served with a glass of champagne. ",

    service21: "Firewalker Pedicure & Manicure with gel polish",
    service21Time : "80 mins",
    service21Price : "80",
    service21Description : "Indulge in this guilt-free pleasure. The Firewalker Pedicure & Manicure will leave your feet, legs, and hands feeling amazing. Start with an Herbal Mineral Bath, followed by a blend of Grapefruit Body Bar and Walnut Body Lufra Exfoliating. Top it off with the Revitalizing Ice Dancer leg massage and a hot towel wrap to elevate your pedicure experience. Along with our famous Sole Solution heel treatment, finger pressure massage techniques using Firewalker Cream will alleviate all tiredness. Finish with the ultimate softness of Baobab Body Butter. Served with a glass of champagne.",

    service22: "Essential Oils Pedicure & Manicure with normal polish",
    service22Time : "1 hr 40 mins",
    service22Price : "90",
    service22Description : "Choose your favorite oils and dive into the refreshing, rejuvenating, and sharp aroma of Epoch Essential Oil. This unique blend combines the wisdom of ages with modern science, providing an ultimate pedicure experience. For centuries, indigenous cultures have enhanced their lives with botanicals, transforming topical remedies into aromatherapy. Indulge in this guilt-free pleasure. Your feet and hands have long been waiting for this rejuvenating Essential Oils Pedicure & Manicure. Served with a glass of champagne.",

    service23: "Essential Oils Pedicure & Manicure with gel polish",
    service23Time : "1 hr 40 mins",
    service23Price : "100",
    service23Description : "Choose your favorite oils and dive into the refreshing, rejuvenating, and sharp aroma of Epoch Essential Oil. This unique blend combines the wisdom of ages with modern science, providing an ultimate pedicure experience. For centuries, indigenous cultures have enhanced their lives with botanicals, transforming topical remedies into aromatherapy. Indulge in this guilt-free pleasure. Your feet and hands have long been waiting for this rejuvenating Essential Oils Pedicure & Manicure. Served with a glass of champagne.",

    service24: "Essential Oils Pedicure with normal polish",
    service24Time : "60 mins",
    service24Price : "55",
    service24Description : "Choose your favorite oils. Dive into the refreshing, rejuvenating, and sharp aroma of Epoch Essential Oil, combining the wisdom of ages with modern science, for the ultimate pedicure experience. For centuries, indigenous cultures have improved their lives with botanicals, from topical remedies to aromatherapy. Indulge in this guilty pleasure without guilt. Your feet have long been waiting for this rejuvenating Essential Oils Pedicure, served with a glass of champagne.",

    service25: "Essential Oils Pedicure with gel polish",
    service25Time : "60 mins",
    service25Price : "60",
    service25Description : "Choose your favorite oils. Dive into the refreshing, rejuvenating, and sharp aroma of Epoch Essential Oil, combining the wisdom of ages with modern science, for the ultimate pedicure experience. For centuries, indigenous cultures have improved their lives with botanicals, from topical remedies to aromatherapy. Indulge in this guilty pleasure without guilt. Your feet have long been waiting for this rejuvenating Essential Oils Pedicure, served with a glass of champagne.",
 
    service26: "Icedancer Manicure with normal polish",
    service26Time : "35 mins",
    service26Price : "30",
    service26Description : "Your hands have been long-awaiting a rejuvenating pedicure. Say ahh... to a warm whirlpool soak with Mineral Herbal Bath. Then, enjoy a gentle massage and exfoliation with Walnut Husk Liquid Body Lufra. While the regular manicure components are attended to, an arm massage with the Invigorating Icedancer and a steamy towel wrap are added to restore vitality and energize the legs. Dry heels are also treated with the all Spice Berry Sole Solution. Finish with a soft yet intensely hydrating Baobab Body Butter for the ultimate experience.",

    service27: "Icedancer Manicure with gel polish",
    service27Time : "35 mins",
    service27Price : "40",
    service27Description : "Your hands have been long-awaiting a rejuvenating pedicure. Say ahh... to a warm whirlpool soak with Mineral Herbal Bath. Then, enjoy a gentle massage and exfoliation with Walnut Husk Liquid Body Lufra. While the regular manicure components are attended to, an arm massage with the Invigorating Icedancer and a steamy towel wrap are added to restore vitality and energize the legs. Dry heels are also treated with the all Spice Berry Sole Solution. Finish with a soft yet intensely hydrating Baobab Body Butter for the ultimate experience.",

    service28: "Firewalker Manicure with normal polish",
    service28Time : "40 mins",
    service28Price : "35",
    service28Description: "Indulge in this guilt-free pleasure. The Firewalker Manicure will leave your hands and arms feeling amazing. Start with a Herbal Mineral Bath, followed by a blend of Grapefruit Body Bar and Walnut Body Lufra Exfoliating. Top it off with the Revitalizing Ice Dancer arm massage and a hot towel wrap to take your manicure experience to a whole new level. Along with our famous Sole Solution heel treatment, finger pressure massage techniques using Firewalker Cream will alleviate all tiredness. Finish with the ultimate softness of Baobab Body Butter.",

    service29 : "Firewalker Manicure with gel polish",
    service29Time : "40 mins",
    service29Price : "45",
    service29Description : "Indulge in this guilt-free pleasure. The Firewalker Manicure will leave your hands and arms feeling amazing. Start with a Herbal Mineral Bath, followed by a blend of Grapefruit Body Bar and Walnut Body Lufra Exfoliating. Top it off with the Revitalizing Ice Dancer arm massage and a hot towel wrap to take your manicure experience to a whole new level. Along with our famous Sole Solution heel treatment, finger pressure massage techniques using Firewalker Cream will alleviate all tiredness. Finish with the ultimate softness of Baobab Body Butter.",

    service30: "Essential Oils Manicure with normal polish",
    service30Time : "50 mins",
    service30Price : "45",
    service30Description : "Choose your favorite oils and dive into the refreshing, rejuvenating, and sharp aroma of Epoch Essential Oil. This unique blend combines the wisdom of ages with modern science, creating the ultimate manicure experience. For centuries, indigenous cultures have enhanced their lives with botanicals, transforming topical remedies into aromatherapy. Indulge in this guilt-free pleasure. Your hands have long been waiting for this rejuvenating Essential Oils.",

    service31: "Essential Oils Manicure with gel polish",
    service31Time : "50 mins",
    service31Price : "50",
    service31Description : "Choose your favorite oils and dive into the refreshing, rejuvenating, and sharp aroma of Epoch Essential Oil. This unique blend combines the wisdom of ages with modern science, creating the ultimate manicure experience. For centuries, indigenous cultures have enhanced their lives with botanicals, transforming topical remedies into aromatherapy. Indulge in this guilt-free pleasure. Your hands have long been waiting for this rejuvenating Essential Oils.",

    service32: "Nails Cut & File only",
    service32Time: "15 mins",
    service32Price: "12",
    service32Description: "",

    service33: "Deluxe Pedicure",
    service33Time: "60 mins",
    service33Price: "60",
    service33Description: "Includes everything in Shellac Pedicure plus pedi mask & hot towel wrap. Pamper yourself pretty and indulge in an unforgettable scent-sation of your choice. Seep into deep relaxation or give yourself an energizing lift with the aid of essential oils and minerals.",

    service34: "Hot-Stone Pedicure",
    service34Time: "60 mins",
    service34Price: "65",
    service34Description: "A hot-stone pedicure is a specialized pedicure that uses heated rocks to encourage relaxation in your legs and feet. If your feet undergo wear and tear in daily life, a hot-stone treatment may be just what you need to complement your pedicure. Your toes come out looking clean and pretty, and your legs and feet feel less tense. Indulging in a hot-stone pedicure encourages you to unwind and relax."




  };
  
  const serviceList4 = {
    service1 : "Asian Style Hair Wash, Head Massage",
    service1Time : "30 mins",
    service1Price : "35",
    service1Description : "Apart from using the highest quality products, we will apply our trademark hair wash and head massage technique, ensuring that you will enjoy the moment our hands massage into your scalp ensuring the conditioner absorbs deep into the hair shaft. The Indian head massage is extended to the neck, shoulders and upper arms. The treatment is completed by a complete head and facial rinse.",
  
    service2 : "Balance , Moisturising Shampoo",
    service2Time : "45 mins",
    service2Price : "45",
    service2Description : "Starts with a gentle hair wash and scalp massage using popular branded hair shampoo (Nu Skin shampoo avaiable if required at extra cost). The hair is rinsed in comforting warm water. A luxurious cream (Nu Skin ageLOC LumiSpa Cleanser) is then applied and gently rubbed into the face using the Nu Skin ageLOC LumiSpa device which deep cleans and invigorates the facial tissues.The Indian head massage is extended to the neck, shoulders and upper arms. The treatment is completed by a complete head and facial rinse.",
  
    service3 : "AgeLoc Nutriol Scalp & Hair Shampoo",
    service3Time : "60 mins",
    service3Price : "70",
    service3Description : "A holistic hair beauty system, Ageloc Nutriol Scalp & Hair System product contain powerfull ingredients for a scientifically advance treatment that, when combined with Ageloc Galvanise Spa, delivers instant benefits for your hair and lasting results up to your sclap. Enjoy a healthier hair appearance that looks & feels thicker, fuller, stronger, softer, shinier. Invest in hair up to your scalp, it’s the crown you wear every day!",

    service4 : "Dipping Powder SNS",
    service4Time : "45 mins",
    service4Price : "32",
    service4Description : "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails.",

    service5: "Dipping Powder SNS French Tip",
    service5Time: "45 mins",
    service5Price: "35",
    service5Description: "",

    service6: "Dipping Powder SNS Ombre",
    service6Time: "45 mins",
    service6Price: "38",
    service6Description: "",
  }; 
  const serviceList5 = {
    service1 : "Nail Design (from)",
    service1Time : "",
    service1Price : "5",
    service1Description : "The best looking nails are made with the best nail care services from our " + seoKeyword.seoKeyword1 +". Caring for your surface is the key to keeping it looking good for as long as possible. So come on over and treat yourself today.⁣",
  
    service2 : "Diamond Crystal x10",
    service2Time : "",
    service2Price : "3",
    service2Description : "",

    service3 : "3D nail art (from)",
    service3Time : "",
    service3Price : "5",
    service3Description : "",

    service4 : "Three colours/five colours",
    service4Time : "",
    service4Price : "5",
    service4Description : "",

    service5: "Chrome (from)",
    service5Time : "",
    service5Price : "7",
    service5Description : "Our skilled technicians will expertly apply a layer of chrome finish to give your nails a metallic shine that will have everyone envious. From classic silver to bold and brilliant gold, we have a range of chrome colors to choose from. Embrace your feminine side and pamper yourself with a touch of glamour with Chrome Nails. Get ready to turn heads and feel confident in your skin with this chic and sophisticated manicure. Your nails deserve the best, come and visit us today!",

    service6: "French Tip (from)",
    service6Time : "",
    service6Price : "5",
    service6Description : "",

    service7 : "Take off Powder",
    service7Time : "20 mins",
    service7Price : "10",
    service7Description : "Just take off",

    service8 : "Single nails repair (from)",
    service8Time : "",
    service8Price : "£3/£5",
    service8Description : "",

  }; 
  
  const serviceList6 = {
    service1 : "Eyebrow Shape",
    service1Time : "15 mins",
    service1Price : "8",
    service1Description : "",
  
    service2 : "Lip waxing",
    service2Time : "15 mins",
    service2Price : "5",
    service2Description : "",

    service3 : "Chin waxing",
    service3Time : "15 mins",
    service3Price : "8",
    service3Description : "",
  
    service4 : "Under arm waxing",
    service4Time : "15 mins",
    service4Price : "8",
    service4Description : "",

    service5 : "Bikini line",
    service5Time : "20 mins",
    service5Price : "15",
    service5Description : "",
  
    service6 : "Brazilian waxing",
    service6Time : "20 mins",
    service6Price : "25",
    service6Description : "",
  
    service7 : "Hollywood waxing",
    service7Time : "20 mins",
    service7Price : "30",
    service7Description : "",

    service8 : "Full leg waxing",
    service8Time : "20 mins",
    service8Price : "30",
    service8Description : "",

    service9 : "Half leg waxing",
    service9Time : "15 mins",
    service9Price : "15",
    service9Description : "",

    service10 : "Full arm waxing",
    service10Time : "20 mins",
    service10Price : "20",
    service10Description : "",

    service11 : "Half arm waxing",
    service11Time : "15 mins",
    service11Price : "12",
    service11Description : "",
  
    service12 : "Eye - Last Lift With Tinting",
    service12Time : "",
    service12Price : "40",
    service12Description : "PATCH TEST 24 HOURS PRIOR",

    service13 : "Eyebrow tinting ",
    service13Time : "20 mins",
    service13Price : "8",
    service13Description : "",
  
    service14 : "Eyebrow THREADING",
    service14Time : "15 mins",
    service14Price : "8",
    service14Description : "",
  
    service15 : "Lip THREADING",
    service15Time : "15 mins",
    service15Price : "6",
    service15Description : "",
  
    service16 : "Chin THREADING",
    service16Time : "15 mins",
    service16Price : "8",
    service16Description : "",

    service17 : "Eyelash tinting",
    service17Time : "20 mins",
    service17Price : "10",
    service17Description : "",

    service18 : "Henna eyebrows",
    service18Time : "15 mins",
    service18Price : "25",
    service18Description: "",

    service19 : "Face waxing",
    service19Time : "20 mins",
    service19Price : "15",
    service19Description : "",

    service20 : "Upper lip or chin",
    service20Time : "15 mins",
    service20Price : "6",
    service20Description : "",

    service21 : "Upper lip and chin",
    service21Time : "30 mins",
    service21Price : "10",
    service21Description : "",
    
    service22 : "Bikini waxing",
    service22Time : "20 mins",
    service22Price : "35",
    service22Description : "",

    service23: "Upper Lip waxing",
    service23Time: "15 mins",
    service23Price: "6",
    service23Description: "",

    service24: "Upper Leg waxing",
    service24Time: "20 mins",
    service24Price: "18",
    service24Description: "",

    service25: "Full Back waxing",
    service25Time: "15 mins",
    service25Price: "20",
    service25Description: "",

    service26: "Hollywood Bikini",
    service26Time: "20 mins",
    service26Price: "30",
    service26Description: "",

    service27: "Classic Lash",
    service27Time: "60 mins",
    service27Price: "65",
    service27Description: "",

    service28: "Lash Lift",
    service28Time: "45 mins",
    service28Price: "40",
    service28Description: "",

    service29: "Lash Lift & Tinting",
    service29Time: "60 mins",
    service29Price: "45",
    service29Description: "",
    




  };

  const serviceList7 = {
    service1 : "AgeLoc Moisturzing Refresh Mask",
    service1Time : "30 mins",
    service1Price : "35",
    service1Description : "Treat yourself to a refreshing mask that will deep cleanse, exfoliate and moisturise your facial tissues leaving you with a rejuvenated look",
  
    service2 : "AgeLoc Refreshing Mask for Oily Skin",
    service2Time : "40 mins",
    service2Price : "45",
    service2Description : "Alternatively, if you suffer from oily skin, treat yourself a refreshing face mask that will deep cleanse and remove excessive oil on from your facial tissues, leaving your skin a clean, balanced structure and a healthy looking.",

    service3 : "AgeLoc Face Lift",
    service3Time : "50 mins",
    service3Price : "55",
    service3Description : "To exfoliate dead skin, lift and tighten the facial for a firmer, more youthful appearance. We use AgeLoc Cleanse & Tone",

    service4 : "AgeLoc Anti Aging Facial",
    service4Time : "60 mins",
    service4Price : "70",
    service4Description : "Reduce fine line and restore skin to a more youthful look. Facial tissues are stimulatedfor an improved appearance. Provide facial toning, improves facial contouring, thereby making the skin look more voluminous: Tru Face, Features microcurrent technology, Clean & reduces pores.",

    service5 : "BIAB buider gel Fullset",
    service5Time : "35 mins",
    service5Price : "40",
    service5Description : "",

    service6: "BIAB builder gel Overlay",
    service6Time: "35 mins",
    service6Price: "35",
    serviced6Description: "",

    service7 : "BIAB buider gel Infill",
    service7Time : "30 mins",
    service7Price : "30",
    service7Description : "",
  }; 

  const serviceList8 ={
    service1: "Nails Polish",
    service1Time: "",
    service1Price: "6",
    service1Description: "",

    service2: "Toes Nails Polish",
    service2Time: "",
    service2Price: "8",
    service2Description: "",

    service3: "Pedicure & Manicure",
    service3Time: "",
    service3Price: "30",
    service3Description: "",

  }
  
  export { changedInfo };
  export { processedInfo };
  export { images };
  export { imageAlt };
  export { processedBusinessOpeningTime };
  export { headerInput };
  export { schemaData };
  export { menu };
  export { serviceCategory };
  export { pageContent };
  export { button };
  
  export { serviceList1 };
  export { serviceList2 };
  export { serviceList3 };
  export { serviceList4 };
  export { serviceList5 };
  export { serviceList6 };
  export { serviceList7 };
  export { serviceList8 };

  export default function Info() {
    return (
      <>
      </>
      );
    }