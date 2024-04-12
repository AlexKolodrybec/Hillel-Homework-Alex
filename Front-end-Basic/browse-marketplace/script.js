const categoryArr = [
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/5f29/0aef/1589d4b7ed50db6bf310ffa8392539ea?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qnk7-y~ULf-J-YSV3S~d~dOSJukqGmWQNRu-nyXThEsomOur3e~zFeSIrmLaxSaHE5V0GgAoR3ESz~A43bhYpD-cQhJO4gXDdeYOk6KzNHO3bhAm6x9Wz7CVAyScOZn9otmF2T7N1DoAnl2axuZJdCu4uUcUl3O9FtOC8apGwcvK3EeYl1d4HTvebgOJh1PdonXjF6v2xeT0kzjDL2hygf45zphD1Do7T1eBH1eXwnvlzahB3o-lYWxdmo6KOhSTF8kOYFEki0t7Xvnnzqn6vfZxVJjJrimnkIKXUDeP9H2MjVEZArUsdY-d7RCwSbefBxRAXvQqOVpvOIhz~txz6w__",
        artisnName: "Foxy Life"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/4eec/8eba/54b2d345dc1480b247b05bb6f0d1f429?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uff-waK8lOUKr4v3rIvkpzWS3VfpzRHfaF4TATw5P83a2U6SieValNIPQ6Ju~S86D~OBzyZf9PQm0QP8FIMH3QoKGRbmA334t2iseTWPupQpUxgRjerpuESgxzT2ZSWgBijWDFc1AK62RUHT70vKAFizUxwDIToGMQOVoq66ZBHeloxhNQTTLpvsd8Gk-iZtm-lOJuJ-G0lr4fndxJdZkcghd8728X5RKbtXJWfe9pVLMR4mAn~SgQeTq5uVvaN1AHvum31K~SvxDxX6-K1um~Ipcr1xtkt4lFluydbMzyLzhOhMlPjo4GFNqkULn1wF4Uay6EMO0sVXd9Z0i2EKNg__",
        artisnName: "Cat from future"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OqDkwKggm36ePzn42k0NDVNP~b~7mhtWiHeuBYj2Clou8wSBknGSVAO-FBEp7xmOkjqw8OBbha63ttBxmk7J2SiIKb23d07isBSmqFORBL-tDWX1~-THNJIhD6NEPOlTln-0ccywbfcHY9-TXLzutJBufC8aary85Wcnih1E5Cez2PeL38H4qhFP5BjO8kdZkEXESU7NR5fKZhlmNkVOZ2uZm0F~77zMy5MC5mM-BH1oTHgG1-TjwayB2rhadsCsImMqH-uuFM51qdBabyBRXLw-gSlBa3ZmW7S5m~x2LEL8OSYdZnaSH5o~nJ2iNobYSa8V5BoJfCIQKvUclgoq2w__",
        artisnName: "Psycho Dog"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OqDkwKggm36ePzn42k0NDVNP~b~7mhtWiHeuBYj2Clou8wSBknGSVAO-FBEp7xmOkjqw8OBbha63ttBxmk7J2SiIKb23d07isBSmqFORBL-tDWX1~-THNJIhD6NEPOlTln-0ccywbfcHY9-TXLzutJBufC8aary85Wcnih1E5Cez2PeL38H4qhFP5BjO8kdZkEXESU7NR5fKZhlmNkVOZ2uZm0F~77zMy5MC5mM-BH1oTHgG1-TjwayB2rhadsCsImMqH-uuFM51qdBabyBRXLw-gSlBa3ZmW7S5m~x2LEL8OSYdZnaSH5o~nJ2iNobYSa8V5BoJfCIQKvUclgoq2w__",
        artisnName: "Designer Bear"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/a792/ddc0/c4e1193ffd08cf4918e6f696bbc8d8fe?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OqDkwKggm36ePzn42k0NDVNP~b~7mhtWiHeuBYj2Clou8wSBknGSVAO-FBEp7xmOkjqw8OBbha63ttBxmk7J2SiIKb23d07isBSmqFORBL-tDWX1~-THNJIhD6NEPOlTln-0ccywbfcHY9-TXLzutJBufC8aary85Wcnih1E5Cez2PeL38H4qhFP5BjO8kdZkEXESU7NR5fKZhlmNkVOZ2uZm0F~77zMy5MC5mM-BH1oTHgG1-TjwayB2rhadsCsImMqH-uuFM51qdBabyBRXLw-gSlBa3ZmW7S5m~x2LEL8OSYdZnaSH5o~nJ2iNobYSa8V5BoJfCIQKvUclgoq2w__",
        artisnName: "Dancing Robot 0375"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/8b1e/419a/e7379ad5b52877ce89231d09f29bbfa1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aNcfFcM80PLmF57P0bqgdCz14WPut13m-VIvDKZv-JabV6ZIPeWLsPIUTMWp0i94uu69cevEoyLeLUsxDJXiGYKNlJzHHYSKXILB~B-Mv~yRt3YofxjRXdMkqzVOb9MNgFK1Ngmzkyqc7tZTVfXwzFE3st5-7bmEzWtF4B1wIq6yzNBNJjPw6xubbCrwG5UJWXsx~kjqvbXOXapJJcbWvZk7afWYYEKyHZ0RYepLky-mR4OI-ep~LKMEmchV0XQ4DMcWxcvI7eaeQBFEJGWExm1V~XbsYcl~a2EZmbmhG7m1q40yASAYMqL4T62XV~pVwMP4K3Njl83pgKGWEjHDWQ__",
        artisnName: "Dancing Robot 0356"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/d983/47e1/73b90df9823e9f0887e7106bb434691d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exhUBLgaN2Eg93z02SuI941IFRNwxh9i~Bpb-s1P7szky2izCAA~fO~u1sFFJnbH853kyqHpUhx3a443J7W19vXnW8KZJCrWonfu4Q9bNFCqgDiYdVMyM3GHg53UyM5a~B8cOkOl--oPD2O5SwuU1YDLw2bFUulhV7YfZj-I2dmMRuX-fhtlnLhFb3-09TLb7UTudLRO2Hmsbb38w8snnSsTQC5O6uTfJ5p2dEaX8ENUuWF6yBPd0OPqMSUtm1LPdv6i4QuSAehRraXyxSA6uqwlwaTgiPh2leeRske2tXdYGCbOHlJ5uJx51~EyeCXKc5zNBmOthzevNZ-vt6apuw__",
        artisnName: "Dancing Robot 0321"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/e21b/d708/ab5a825e0fedd4f1daf3d715bf9577ae?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXxXzMPwqEFQydGHdsxiDp5R~6EYlJvJRed5nDpPRTiYML3SW90KLxkZ44tdAa0XlQuIJjB7DLTYJxE5vbNTldKYfqExCFVr1eC7p0EjuPGhtiZu5GFuDplidun5sJ3iaPIW7VNV4luiSmXeOvGnLpUG1fyS~59vvjuNc8InDaW~vv7QDeYMCDW5~LNz3-m~XYiGIP3TKpSV0LAmceWvsyYNvD59T7nAK1Ug~qneKgWXALu4QZQNTlA8vAd5nbrALgdDOu5MyLAG6oF4X52RJX1GPeZk44cDq~Sxl2Rep15V4jl-Apn3dT5TZ4-r8tTyXbB0lewvtZHa97Gi9WBRag__",
        artisnName: "Dancing Robot 0512"
    },
    {
        artistImg: "https://s3-alpha-sig.figma.com/img/b338/4bd6/0407ef45f746f24f9aef73c922fa122a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bcBbDUPI1o-NonwawnLonDlsPJmEFdoEXv4q0u9JKC4ZnMQgejZXC5Wr8aftL6lkWtmrT0pdJOvPmIMWfqEDfu6OGt-QgS7NtWH8wJNcblX3HL3NUY02DmBacK8p6fF8GvX7zGwL2viw2E-RPl1XbrFBeMO7UGU0Kbh~CZ-c9Zn7XwuIyUPxLcja5xx9li6KSKz49a7g0~D5G2se10M5EM1DXapKmqXiqpAnR50-LWZ-6kfeDFFRkozeATVRstZfXBDxJ7CrguCqvjxi3oL9qI0wpSETw~GVtktp7ZIKxEnchBqueAWOJrKC27-7iXRkXigPaa3IyxflbUqTJK0IJw__",
        artisnName: "Dancing Robot 0024"
    }
]

const artistList = document.querySelector(".nft-cards")

for (let counter = 0; counter < categoryArr.length; counter++) {
    artistList.innerHTML += `<div class="nft-card">
    <div class="nft-image">
    <img src="${categoryArr[counter].artistImg}" alt="" class="nft-img">
    </div>
    <div class="nft__info">
      <div class="artist-info">
        <h5 class="nft-name">${categoryArr[counter].artisnName}</h5>
        <div class="artist-avatar-name"></div>
        <img src="https://s3-alpha-sig.figma.com/img/df15/4235/7607a1ee4849d817ed31b7a6f61f08e2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ez3J~hfusTpZlcmT8tVuFwxkSuoyk9VZuXuwK8XC2b-yKpBfM-6I9vwIAQsDroPor1UfxR-XY6CjVgH4YvZoZ8DOexRMHbpcLFsrP2vzMUm0n87Fc1RVuGz1AAWdsoNl9kQIHsJ1JX6Hb~0fXLuN-PpNb4N2P-Whh7oCA31gbDFod~hM8MUZjEG-oVin89jocAn794eS51Mat1Ru3EE4lVx8T9s5mNDsEuk9Su-UfdNTu7GF5prsUBc6fC~VR2u~tjD8IAax2JnFQVVcmR7G4m~rBZnAi7fGGuhUC6SpKcaQ2J2PJGwaKZheYQ8wD3X~P0zKjVDr3XFshdcrNVr0QA__" alt="" class="artist-avatar">
        <p class="artist-name">Orbitian</p>
      </div>
      <div class="additional-info">
        <div class="price">
          <p class="price-paragraph">Price</p>
          <p class="price-eth">1.63 ETH</p>
        </div>
        <div class="highest-bind">
          <p class="highest-bind-paragraph">Highest Bid</p>
          <p class="highest-bind-eth">0.33 wETH</p>
        </div>
      </div>
    </div>
  </div>`; }