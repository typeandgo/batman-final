# Projenin local ortama kurulması
```
git clone xxxx
npm init
```

# 'Development' ortamında projenin yürütülmesi
```
npm run dev
```

Bu komut gerekli bundle ve chunk'ları üretir ve 'watch' metodu ile her kod değişikliğinde bundle ve chunk'ları tekrar üretir. Local ortamda geliştirme yaparken bu komut kullanılmalıdır.


# 'Production' ortamında projenin yürütülmesi
```
npm run build
```

Bu komut gerekli bundle ve chunk'ları üretir ve chunk'lara hash ekler. Yapılan değişiklikleri izlemez. Production çıktısı üretir.
