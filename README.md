# bireyselumre.org

Umreye acentesiz, bireysel gitmek isteyenler için ücretsiz rehber sitesi.

- Statik site: [Hugo](https://gohugo.io)
- Yayın: GitHub Pages
- İçerik: `content/` klasöründeki Markdown dosyaları

## Yerelde çalıştırma

```
hugo server
```

## Kaynak gösterme

Her sayfanın ön bilgisinde (front matter) bir `kaynaklar` listesi bulunur; sayfa sonunda
numaralı "Kaynaklar" bölümü olarak gösterilir. Metin içinde `{{< k 1 >}}` veya
`{{< k 1 3 >}}` kısa koduyla ilgili kaynağa dipnot verilir.

```yaml
lastmod: 2026-10-10
kaynaklar:
  - ad: "Umre Yolcusu Rehberi (8. baskı, 2025)"
    kurum: "Diyanet İşleri Başkanlığı"
    url: "https://hacumreegitim.hac.gov.tr/uploads/materials/mat_69c54171a5be3.pdf"
    not: "s. 13–22"
```

Diğer ön bilgi seçenekleri: `toc: false` (içindekiler kutusunu gizler),
`checklist: true` (sayfadaki `- [ ]` maddelerini işaretlenebilir yapar; işaretler tarayıcıda saklanır).

## Temel kaynaklar

Fıkhî içerik Diyanet İşleri Başkanlığı'nın Umre Yolcusu Rehberi (2025), Din İşleri Yüksek Kurulu'nun
Hac ve Umre ile İlgili Fetvalar (2025) ve Hac ve Umre Duaları (2026) kitaplarına dayanır.
Tam liste için sitedeki `/kaynaklar/` sayfasına bakın.
