 <!-- Input'un focus içinde mi yoksa dışında mı olduğunu nasıl kontrol edeceğinizi merak ediyorsanız, ilgili terimleri Google'da aratın; bu yaygın bir sorudur ve çok sayıda sonuç alacaksınız. Ancak okuduğunuz sonuçların React'in eski sürümlerine yönelik olup olmadığına dikkat edin ve mevcut sürüme yönelik olanlara odaklanın. Bunu yapmanın artık eskisinden daha kolay bir yolu var. 
 Bir şeyin farklı koşullara bağlı olarak farklı şekillerde işlenmesini istiyorsanız, bunu gerçekleştirmek için React'te genellikle ne yapmanız gerekir? 

Bunu düşünün ve hala takıldıysanız, başka bir ipucu için 51. satıra ilerleyin. 






yanlis kullanim
const [myValue, setMyValue] = useState('');


<input type="text" value={myValue} onChange={(e) => setMyValue(e.target.value)} />

dogru kullanim

const [myValue, setMyValue] = useState('');

// ...

<input type="text" value={myValue} onChange={(e) => setMyValue(e.target.value)} />





































Bir state oluşturmanız ve ardından bazı koşullu mantıklar yapmak için bu state'in değerini kullanmanız gerekir. State, input'un focus içinde ya da dışında olmasına bağlı olarak değişmelidir. Bu konuda daha fazla bilgi için ipucu 1'e bakın. 

Kullanıcı "Otomatik Tamamla" butonuna tıkladığında gerçekleşen olaylar zincirini takip edin. Zincirin sonunda ne olur? Input elemanını temizleme görevini yerine getirmek için bunu nasıl kullanabilirsiniz? 

Bunu yaptıktan sonra hala takıldıysanız, başka bir ipucu için 102. satıra ilerleyin. 














































React'te bir input elemanının değerini kontrol etmek istiyorsanız, genellikle ne yapmanız gerekir? 

Hala takıldınız mı? 152. satıra kadar aşağı kaydırın.















































Önceki ipucunu tekrar okuyun: React'te bir input elemanının değerini *kontrol* etmek istiyorsanız, genellikle ne yapmanız gerekir? 

"Kontrol" vurgusuna dikkat edin... Cevabı tamamen vermeden bu konuda daha fazla şey söyleyemem



Kullanıcı "Otomatik Tamamla" butonuna tıkladığında yapılacaklar listesi öğelerinin metninin ("to-do-list-item-text" className'ine sahip paragraflar) üzeri çiziliyor, yani kodun bu kısmında bir şeyler doğru çalışıyor olmalı  ve her ne ise, onay kutuları bunu kaçırıyor olmalı. 

Ne eksik? Metinde olup da onay kutularında olmayan şey nedir? Metin için zaten yapılmakta olan benzer bir şeyi onay kutuları için nasıl yapabilirsiniz?

 -->