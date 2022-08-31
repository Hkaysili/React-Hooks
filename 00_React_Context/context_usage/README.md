## REACT CONTEXT KULLANIMI

React'de Redux yerine kullanılan bir yapıdır.

### Ne İşe Yarar ?
Props'larımız her seviyede erişilebilir kılmak için kullanıyoruz.

* Redux gibi stateManagment tool'ları kullanmıyorsak , React bizlere böyle bir yapı sunuyor.

Öncelikle problemi anlayalım..
- 3 adet componentimiz olsun 
  > Header
  > Footer
  > Tema seçimi yapacağımız bir switcher (hatta bunu da alt bi component olarak tutalım.)

Basic düşündüğümüzde child componentlere propslar geçerek bu işi yapabiliyoruz. İşte UseContext & Provider kullanımları burada imdadımıza yetişiyor 

****
Happy Coding !
*****