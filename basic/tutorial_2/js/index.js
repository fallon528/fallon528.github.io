
var infoDiv = document.getElementById('info');

            // 創建地圖並設定中心點與縮放等級
            var map = L.map('map').setView([25.033964, 121.564468], 13); // 台北 101 的經緯度

            // 添加地圖圖層（OpenStreetMap 作為範例）
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // 添加標記點1
            var marker = L.marker([25.033964, 121.564468]).addTo(map)
                .bindPopup('這裡是台北 101!')
                //.openPopup();

            // 添加標記點2
            var marker2 = L.marker([25.02613057141727, 121.52754419090462]).addTo(map)
                .bindPopup('這裡是鼠大!')
                //.openPopup();

            // 添加標記點3
            var marker3 = L.marker([25.02701527574566, 121.52626531771624]).addTo(map)
                .bindPopup('這裡是周杰倫家!')
                //.openPopup();

        marker.on('click', function () {
            console.log("Click 1");
            infoDiv.textContent = "台北101是台灣的象徵之一，曾是世界最高的建築。這座摩天大樓擁有辦公室、商場、餐廳等設施，是台北市最繁華的地區之一。儘管台北101內部精心維護，但在其周邊密集的都市環境中，老鼠的活動依然無法避免。台北101周圍的商業區、餐飲業和夜市等地，是老鼠頻繁出沒的地方。由於城市中的垃圾管理問題、繁忙的商業活動和綠地有限，這些小型哺乳動物常常在城市的建築物之間出現。老鼠可能透過地下管道或建築裂縫進入，並在夜間尋找食物和藏匿的地方，成為台北101及其周邊區域的常見居民之一。";
        });
        
        marker2.on('click', function () {
            console.log("Click 2");
            infoDiv.textContent = "國立臺北師範大學，簡稱師大，是台灣一所頂尖的教育學府，成立於1946年，位於台北市的大安區。這所學校不僅以其卓越的教育培訓而聞名，也因其周圍自然環境而受到關注。師大擁有許多綠地，吸引了不少野生動植物，然而，在這些綠地與城市區域交界處，老鼠的活動也是相對頻繁的。尤其在夜間，老鼠常常在校園內外尋找食物和藏匿的地方，特別是在附近的餐廳和商店周圍。由於台北市區的密集人口和繁忙的商業活動，這些小型哺乳動物的分布較為廣泛。";
        });
        
        marker3.on('click', function () {
            console.log("Click 3");
            infoDiv.textContent = "美周杰倫，台灣流行音樂的巨星，擁有一座設計獨特的豪宅，地點位於台北市的高級住宅區。周杰倫的家不僅是他音樂創作的聖地，也是他休閒放鬆的場所。家中設有音樂室、私人影院等設施，充分顯示其高端品味。然而，周邊的城市環境仍然不免會遭遇到一些小型動物的入侵，包括老鼠。在這些豪宅區域，由於周邊商業活動和密集的城市結構，老鼠的活動範圍有時會擴展至高級住宅區。周杰倫的住所周圍若有衛生管理不善的情況，老鼠便可能進入這些區域，尋找食物和藏匿的地方。";
        });
                