// ==================================================
// 星光塔羅 - 牌意資料庫
// ==================================================
// 風格：嚴厲導師
// ==================================================

export const CARD_MEANINGS = [
    {
        id: 0,
        name: "愚者",
        general: {
            upright: "嶄新的冒險即將展開。保持開放心態，勇於嘗試未知。即便前方看似懸崖，信任宇宙的安排。",
            reversed: "行事魯莽、思慮不周。可能因過度天真而遭受挫折，或因恐懼未知而不敢踏出第一步。"
        },
        topics: {
            love: { upright: "一段輕鬆、沒有束縛的新戀情，重拾赤子之心。", reversed: "對感情不負責任，或關係太過不穩定，缺乏承諾。" },
            career: { upright: "大膽嘗試新領域的好時機，創意將帶來意外收穫。", reversed: "計畫不周全就貿然行動，工作態度太過散漫小心犯錯。" },
            finance: { upright: "財務上的新機會，意外之財，或者是時候投資自己。", reversed: "衝動消費導致損失。缺乏規劃，請看緊你的荷包。" },
            health: { upright: "充滿活力，身心輕盈。嘗試新的運動或生活方式。", reversed: "忽視身體警訊，或發生意外小傷。注意腳下，別太冒失。" },
            decision: { upright: "跟隨直覺大膽跳躍！邏輯分析現在不重要，相信心流。", reversed: "現在不是做重大決定的好時機，風險未明，請緩一緩。" },
            daily: { upright: "今天適合當個孩子，保持好奇心，驚喜就在轉角。", reversed: "今天可能會有點迷糊或混亂，出門檢查東西帶了沒。" }
        }
    },
    {
        id: 1,
        name: "魔術師",
        general: {
            upright: "萬事具備，時機成熟。你擁有成功所需的一切資源，現在就是行動的時刻。",
            reversed: "才華被埋沒、溝通障礙，或空有想法卻缺乏執行力。資源在眼前，你卻視而不見。"
        },
        topics: {
            love: { upright: "主動出擊！魅力綻放，吸引力處於高峰，表白有望。", reversed: "曖昧對象搞曖昧，或你的追求手法太過刻意而失敗。" },
            career: { upright: "專案啟動、提案通過，你的能力將被看見並重用。", reversed: "溝通誤會導致效率低落，或有人從中作梗阻擋你的計畫。" },
            finance: { upright: "金錢流動順暢，有獲利機會，正向投資可考慮。", reversed: "錢財卡在某處回收困難，或被誇大的投資方案欺騙。" },
            health: { upright: "精力充沛，身體狀態絕佳，適合開始健身或運動計畫。", reversed: "過度消耗導致疲勞，或有頭痛、神經緊繃的問題。" },
            decision: { upright: "別猶豫了，你已經準備好了。果斷行動，成功在望。", reversed: "計畫尚未完善，別急於宣布。過早曝光會引來競爭者。" },
            daily: { upright: "腦袋清楚、效率超高，完成清單上的目標不是問題。", reversed: "溝通出錯、文件填錯，出門前請仔細確認細節。" }
        }
    },
    {
        id: 2,
        name: "女祭司",
        general: {
            upright: "聆聽內在的聲音。答案不在外在世界，而在你的直覺與潛意識深處。",
            reversed: "信息被隱藏，或你選擇性地忽視明顯的警告信號。保持冷漠距離感來逃避問題。"
        },
        topics: {
            love: { upright: "感情需要時間培養。對方或許對你有好感但還在觀察。", reversed: "對方心思難測，或有人暗戀你但不敢表白。曖昧霧裡看花。" },
            career: { upright: "先觀察再行動。收集更多資訊再做判斷，別急於下決定。", reversed: "有人對你有所隱瞞，或你察覺到辦公室裡的暗流。" },
            finance: { upright: "保守理財為上策，等待更好時機再出手投資。", reversed: "隱藏的財務風險，小心被合約或投資項目坑殺。" },
            health: { upright: "身心需要休息。嘗試冥想、瑜伽等靜態活動來平衡。", reversed: "女性健康需注意，或有長期累積的壓力問題爆發。" },
            decision: { upright: "答案不在當下。給自己時間，靜待更清晰的指引。", reversed: "別被表面資訊誤導，深入調查才能看清全貌。" },
            daily: { upright: "今天適合內省，獨處時光能帶來意想不到的洞察。", reversed: "直覺可能出錯，重要決定先暫緩，避免過度解讀。" }
        }
    },
    {
        id: 3,
        name: "皇后",
        general: {
            upright: "豐盛、繁榮、滋養。你正在或即將進入一個富足與和諧的階段。",
            reversed: "過度依賴舒適圈、遲遲不願成長，或對物質與情感過度執著。"
        },
        topics: {
            love: { upright: "戀情成熟穩定，彼此關係滋養且充滿甜蜜與溫柔。", reversed: "一方過度依賴或控制，或關係過於安逸而缺乏激情。" },
            career: { upright: "女性貴人相助，或女性主管對你有助力。專案順利。", reversed: "工作環境有人情緒化，或你對職場產生倦怠感。" },
            finance: { upright: "財務狀況好轉，有穩定收入或額外收益，享樂花費也可。", reversed: "過度消費導致財務吃緊，或對金錢有過度焦慮。" },
            health: { upright: "身心滋養得宜，適合懷孕、生育或美容相關事宜。", reversed: "注意內分泌、體重管理，或長期不良習慣的反噬。" },
            decision: { upright: "答案是肯定的，但需要時間醞釀才能成熟。", reversed: "決策被情感因素過度影響，冷靜下來再說。" },
            daily: { upright: "今天適合放鬆享受，犒賞自己一頓好的或買喜歡的東西。", reversed: "注意控制慾望，別用購物或暴飲暴食來填補空虛。" }
        }
    },
    {
        id: 4,
        name: "皇帝",
        general: {
            upright: "建立秩序與結構的時候。運用理性與紀律來達成目標。",
            reversed: "僵化固執、過度控制，或權威人士不站在你這邊。"
        },
        topics: {
            love: { upright: "關係需要承諾與責任，不是純粹浪漫而是穩定的伴侶關係。", reversed: "大男人主義或控制欲過強，或對方不願意給出承諾。" },
            career: { upright: "權威認可、升遷有望，或是時候建立你的專業系統。", reversed: "遇到固執的上司，或你的計畫被打回票需要修改。" },
            finance: { upright: "穩健理財，儲蓄或固定投資是好選擇。", reversed: "收入變動或被扣款，別做大額投資決策。" },
            health: { upright: "建立規律作息，身體機能將在秩序中恢復。", reversed: "久坐導致的問題，注意脊椎、血壓或消化系統。" },
            decision: { upright: "理性分析後的果斷決定，別讓情緒左右判斷。", reversed: "過度固執會害了你，聽聽反對意見沒有壞處。" },
            daily: { upright: "今天需要紀律和效率，照表操課最安全。", reversed: "別太固執己見，與人衝突對你沒有好處。" }
        }
    },
    {
        id: 5,
        name: "教皇",
        general: {
            upright: "傳統智慧與機構的支援。尋求前人的經驗或正式管道求助。",
            reversed: "過度依賴權威、盲目跟隨，或傳統方法已不適用於現況。"
        },
        topics: {
            love: { upright: "關係獲得家人認可，或以傳統方式（相親、正式交往）發展。", reversed: "家人反對，或這段關係有名無實、淪為形式。" },
            career: { upright: "公司培訓、正式求職面試，或申請獲得批准。", reversed: "體制讓你卡關，或機構官僚作風延誤你的進度。" },
            finance: { upright: "可考慮傳統穩健型投資，如保險、基金或退休金規劃。", reversed: "被傳統觀念束縛理財選擇，或理財顧問並不專業。" },
            health: { upright: "尋求專業醫療協助，別自己當醫生。", reversed: "民眾療法可能延誤病情，請就正規醫療。" },
            decision: { upright: "參考專家意見和既有規範，別擅自創新。", reversed: "別被所謂的「專家」欺騙，保持獨立思考。" },
            daily: { upright: "今天適合學習、閱讀或參加有教育性質的活動。", reversed: "別盲目接受所有資訊，多方查證才能分辨真偽。" }
        }
    },
    {
        id: 6,
        name: "戀人",
        general: {
            upright: "重要選擇與價值觀的考驗。你需要做出符合內心真實的決定。",
            reversed: "錯誤的選擇、價值觀衝突，或因害怕孤獨而妥協將就。"
        },
        topics: {
            love: { upright: "天作之合！靈魂伴侶出現，或現有關係將邁入新階段。", reversed: "三角關係、價值觀不合，或因孤獨而選擇將就。" },
            career: { upright: "合作機會出現，找對夥伴能事半功倍。", reversed: "合作對象不靠譜，或你與團隊價值觀衝突。" },
            finance: { upright: "財務上需要做選擇，評估長期 vs 短期的利益。", reversed: "投資選擇讓你猶豫不決，別被美麗的承諾欺騙。" },
            health: { upright: "身心和諧，注意均衡飲食與規律運動。", reversed: "成癮問題需要關注，如菸酒、甜食或購物。" },
            decision: { upright: "這是價值觀的選擇，跟隨內心的道德羅盤。", reversed: "你可能被蠱惑而做出錯誤決定，必須看清各方立場。" },
            daily: { upright: "今天溝通順暢，適合與重要的人深度交流。", reversed: "小心溝通誤會，說話前先確認對方理解你的意思。" }
        }
    },
    {
        id: 7,
        name: "戰車",
        general: {
            upright: "意志力與掌控力的勝利。克服障礙，朝目標前進。",
            reversed: "前進受阻、內心分裂，或過度依賴蠻力而忽略策略。"
        },
        topics: {
            love: { upright: "主動出擊挽回關係，你願意為愛而戰。", reversed: "溝通不良導致僵局，或有人想逃離這段關係。" },
            career: { upright: "專案即將突破困境，你將帶領團隊走向成功。", reversed: "遭遇強大阻力，有人從中作梗，需要繞道而行。" },
            finance: { upright: "財務目標明確，有望克服金錢困難。", reversed: "收入停滯或支出超出控制，請節流。" },
            health: { upright: "意志力可以戰勝惰性，開始健身或運動挑戰吧。", reversed: "注意意外傷害，開車或運動時請提高警覺。" },
            decision: { upright: "需要強勢執行，不能軟弱退縮。", reversed: "蠻幹不如智取，停下來重新評估策略。" },
            daily: { upright: "今天能量滿滿，適合處理堆積的任務。", reversed: "小心與人擦槍走火，別把脾氣發在無關的人身上。" }
        }
    },
    {
        id: 8,
        name: "力量",
        general: {
            upright: "以柔克剛的智慧。用勇氣與耐心而非蠻力來克服挑戰。",
            reversed: "內心恐懼使不上力，或壓抑的怒氣即將爆發失控。"
        },
        topics: {
            love: { upright: "以耐心和溫柔化解衝突，愛需要時間和理解。", reversed: "一方太強勢壓制另一方，或長期隱忍的情緒將崩潰。" },
            career: { upright: "低姿態溝通能解決難題，展現你的情商。", reversed: "被無理的要求激怒，或工作讓你感到無力。" },
            finance: { upright: "穩扎穩打，小額投資或存錢是明智之舉。", reversed: "衝動投資可能讓你後悔，控制花費慾望。" },
            health: { upright: "高壓環境需要舒壓，注意情緒對身體的影響。", reversed: "積壓的心理壓力影響健康，尋找健康的發洩管道。" },
            decision: { upright: "軟硬兼施，用柔性策略達成目標。", reversed: "耐心已達極限，別在這時做重大決定。" },
            daily: { upright: "修養身心，保持冷靜，衝突可以化於無形。", reversed: "控制脾氣是今天的課題，火爆場面對誰都沒好處。" }
        }
    },
    {
        id: 9,
        name: "隱者",
        general: {
            upright: "暫時退隱是為了更清晰的看見。內在探索的時刻。",
            reversed: "過度孤立、害怕面對現實，或拒絕他人幫助獨自硬撐。"
        },
        topics: {
            love: { upright: "獨處時光可能更適合你，或暗戀某人需要觀察。", reversed: "以忙碌為藉口逃避親密關係，或感到無比孤寂。" },
            career: { upright: "低調做事的時機，避免鎂光燈專注於自己。", reversed: "獨來獨往被人誤解，或你該求助時卻不開口。" },
            finance: { upright: "保守理財，低調處理金錢事務，別炫耀。", reversed: "財務隱私可能外洩，或過度保密反而錯失機會。" },
            health: { upright: "身心都需要休息，獨處充電對你有益。", reversed: "過度封閉可能導致憂鬱傾向，別完全斷絕社交。" },
            decision: { upright: "答案在你自己身上，靜下心來問自己真正想要什麼。", reversed: "過度分析導致停滯，有時需要外部意見來打破盲點。" },
            daily: { upright: "今天適合獨處放空，減少社交活動。", reversed: "別過度內縮，有時與人聊聊反而能釐清思緒。" }
        }
    },
    {
        id: 10,
        name: "命運之輪",
        general: {
            upright: "轉機來臨，宇宙在幫你推動局面。順勢而為。",
            reversed: "運氣不在你這邊，或你抗拒改變而與機會擦肩而過。"
        },
        topics: {
            love: { upright: "緣分到了，桃花運旺盛，可能遇到重要的人。", reversed: "關係遇到轉折點，有人可能要離開或進入。" },
            career: { upright: "運勢上漲，有意外機會主動送上門。", reversed: "專案臨時生變，或你被排除在好消息之外。" },
            finance: { upright: "財務轉機出現，可能是還債或獲利的時刻。", reversed: "金錢運勢低迷，投資可能要再等等。" },
            health: { upright: "身心狀態將好轉，厄運已過。", reversed: "舊疾復發的可能，身體在提醒你該注意了。" },
            decision: { upright: "順應天意，不必強求，時機會帶你到該去的地方。", reversed: "越想控制越失控，放手讓事情自然發展。" },
            daily: { upright: "今天運氣不錯，意外的好事可能發生。", reversed: "計畫可能被打亂，保持彈性別太失望。" }
        }
    },
    {
        id: 11,
        name: "正義",
        general: {
            upright: "真相大白，因果報應。你的行為將得到公正的評斷。",
            reversed: "有不公平的事發生，或你在自欺欺人逃避責任。"
        },
        topics: {
            love: { upright: "關係需要坦誠，公平公正是維持信任的基礎。", reversed: "其中一方有所隱瞞，遲早會被揭穿。" },
            career: { upright: "功過將被客觀評價，功勞不會被埋沒。", reversed: "辦公室政治不公平，或有人在背後議論你。" },
            finance: { upright: "財務糾紛將得到解決，合約順利執行。", reversed: "可能有罰款或賠償責任，檢查你的合約。" },
            health: { upright: "身體機能正常運作，但需要規律檢查。", reversed: "健康問題需要公正診斷，別自己嚇自己。" },
            decision: { upright: "基於事實與邏輯做出判斷，別被情感誤導。", reversed: "證據可能不完整，別太快下結論。" },
            daily: { upright: "今天處理法律、契約或行政事務會順利。", reversed: "文件可能有錯誤，仔細檢查再送出。" }
        }
    },
    {
        id: 12,
        name: "倒吊人",
        general: {
            upright: "暫時的停滯是必要的。換個角度看問題，犧牲是蛻變的前奏。",
            reversed: "不願意做出必要的犧牲，或困在現狀中白白耗費時間。"
        },
        topics: {
            love: { upright: "關係需要一方暫時的付出與配合，耐心等待轉機。", reversed: "一方不願意妥協，或你被困在不平等的關係裡。" },
            career: { upright: "放慢腳步觀察局勢，不是放棄而是蓄積力量。", reversed: "被迫暫停但心態不平靜，或你該主動放手。" },
            finance: { upright: "金錢上的延遲回收，但最終會有好結果。", reversed: "投資被套牢，或你太執著於要回本。" },
            health: { upright: "需要暫時放慢腳步，讓身心得到修復。", reversed: "久病難癒讓你焦慮，接受康復需要時間。" },
            decision: { upright: "停下來不要急著決定，從不同角度思考問題。", reversed: "你可能被「卡住」的感覺困擾，需要換個思路。" },
            daily: { upright: "今天節奏放慢，強求反而适得其反。", reversed: "事情卡關讓你心煩，換件事做可能會有靈感。" }
        }
    },
    {
        id: 13,
        name: "死神",
        general: {
            upright: "徹底的結束與轉化。放下過去，才能迎來真正的新生。",
            reversed: "抗拒改變死死抓住不放，或結束拖太久造成更多痛苦。"
        },
        topics: {
            love: { upright: "關係的舊模式正在消亡，可能是時候告別了。", reversed: "藕斷絲連、糾纏不清，該斷則斷。" },
            career: { upright: "計畫終止或部門重組，舊專案告一段落是好事。", reversed: "裁員或調動的通知，過程會比較艱難。" },
            finance: { upright: "還清債務、處理掉不必要的開銷，財務淨化中。", reversed: "金錢損失已成定局，別再掙扎。" },
            health: { upright: "舊疾復元或需要大手術，結束是新生之路。", reversed: "健康危機未被正視，或康復速度不如預期。" },
            decision: { upright: "告別舊選項才能遇見新可能，別留戀了。", reversed: "你太執著於「還有希望」，該考慮撤退了。" },
            daily: { upright: "改變習慣會帶來好結果，跨出舒適圈吧。", reversed: "計畫被打亂不是壞事，試著接受這安排。" }
        }
    },
    {
        id: 14,
        name: "節制",
        general: {
            upright: "平衡與調和的藝術。找到最佳比例，過與不及都不對。",
            reversed: "失衡的状态仍在持續，或你選擇用極端方式逃避中庸。"
        },
        topics: {
            love: { upright: "關係找到和諧的節奏，彼此適應互相配合。", reversed: "距離感不對，一方太熱一方太冷，需要調整。" },
            career: { upright: "跨部門合作順利，或工作與生活找到平衡。", reversed: "工作量分配不均，或你忙到失去生活品質。" },
            finance: { upright: "收支平衡，穩健理財，極端操作都不適合。", reversed: "兩個極端：不是太節省就是太揮霍。" },
            health: { upright: "身心平衡，適合開始均衡的養生計畫。", reversed: "飲食失衡或運動過度，都需要調整。" },
            decision: { upright: "多方調和，折衷方案往往是最穩妥的。", reversed: "你找不到平衡點，需要更務實的評估。" },
            daily: { upright: "今天一切適中，沒有太大起伏但穩定。", reversed: "可能太過安逸或太過忙碌，找到自己的節奏。" }
        }
    },
    {
        id: 15,
        name: "惡魔",
        general: {
            upright: "面對你的陰影。承認慾望與束縛，才能獲得真正的自由。",
            reversed: "沉溺成癮而不自知，或表面的自由掩蓋不了內心的空洞。"
        },
        topics: {
            love: { upright: "關係中有控制或依賴問題，承認才能解決。", reversed: "不健康甚至有毒的關係，該覺醒並離開了。" },
            career: { upright: "工作環境有你不願面對的黑暗面或壓榨。", reversed: "過度工作成癮，或被合約、責任綁住。" },
            finance: { upright: "對金錢的執著影響生活，需要審視價值觀。", reversed: "消費成癮或對金錢過度焦慮，需要幫助。" },
            health: { upright: "注意成癮傾向，如酒精、藥物或甜食。", reversed: "已經受成癮所苦，承認問題才能開始修復。" },
            decision: { upright: "你可能被誘惑偏離正軌，擦亮雙眼。", reversed: "明知故犯的決定，之後會後悔。" },
            daily: { upright: "檢視自己的壞習慣，今天是面對它們的好時機。", reversed: "別用藉口逃避，你心知肚明什麼是有害的。" }
        }
    },
    {
        id: 16,
        name: "高塔",
        general: {
            upright: "突然的崩解是必然的。面對真相的痛苦是重生的開始。",
            reversed: "崩壞遲早會來，你選擇繼續自欺欺人拖時間。"
        },
        topics: {
            love: { upright: "轟轟烈烈的結束或覺醒，幻想破滅但你會更清醒。", reversed: "表面和平但基礎脆弱，遲早會塌。" },
            career: { upright: "公司劇變、部門重組，或你的計畫被連根拔起。", reversed: "你已感覺到風暴將至，但選擇忽視警告。" },
            finance: { upright: "意外的大筆支出或損失，需要緊急應對。", reversed: "財務危機一觸即發，別再逃避了。" },
            health: { upright: "身體發出緊急訊號，需要立即處理。", reversed: "忽視健康警訊，遲早要付出代價。" },
            decision: { upright: "舊有計畫必須推翻，從廢墟中重新開始。", reversed: "你還在撐著不願意面對現實，快醒了。" },
            daily: { upright: "意外狀況打亂計畫，保持彈性。", reversed: "這幾天心裡有數不太對勁，別鐵齒。" }
        }
    },
    {
        id: 17,
        name: "星星",
        general: {
            upright: "希望與療癒的到來。暴風雨過後，平靜與指引就在前方。",
            reversed: "失去信心、絕望感蔓延，或希望遲遲不來讓你心灰。"
        },
        topics: {
            love: { upright: "關係傷痛正在癒合，新的信任正在建立。", reversed: "對愛失去信心，或傷口還沒好就急著投入。" },
            career: { upright: "度過低潮，看到隧道盡頭的光，工作將好轉。", reversed: "士氣低落，缺乏支持，耐心正在消耗。" },
            finance: { upright: "財務壓力減輕，援助或補助可能到來。", reversed: "對經濟前景悲觀，需要重新建立信心。" },
            health: { upright: "康復之路順暢，身心都在復元。", reversed: "慢性問題需要長期抗戰，別求快。" },
            decision: { upright: "答案在平靜中浮現，信任會帶你走過黑暗。", reversed: "你的期望可能過高，現實沒有那麼完美。" },
            daily: { upright: "心情平靜祥和，适合療癒和自我照顧。", reversed: "今天可能比較低落，做些讓自己開心的事。" }
        }
    },
    {
        id: 18,
        name: "月亮",
        general: {
            upright: "面對不確定與恐懼。真相隱藏在迷霧中，需要勇敢探索。",
            reversed: "被謊言欺騙或自欺，或你刻意忽視不想面對的事。"
        },
        topics: {
            love: { upright: "感覺不確定是真實的，給彼此時間和空間。", reversed: "曖昧對象或伴侶有事瞞著你，你卻不願深究。" },
            career: { upright: "局勢不明朗，保持觀望蒐集更多情報。", reversed: "有隱藏的問題即將爆發，或你被誤導了。" },
            finance: { upright: "投資風險不明，別被高報酬誘惑。", reversed: "小心財務欺詐，合約要看清楚。" },
            health: { upright: "身心問題可能來自壓力或焦慮，追根究柢。", reversed: "症狀不明確讓你焦慮，需要做更詳細檢查。" },
            decision: { upright: "跟著直覺走，但也要驗證你的感覺。", reversed: "你的判斷被情緒或偏見影響了。" },
            daily: { upright: "今天感覺不太對勁，信任你的直覺。", reversed: "容易被誤導，重要決定先緩緩。" }
        }
    },
    {
        id: 19,
        name: "太陽",
        general: {
            upright: "成功、喜悅與繁榮的高峰時刻。享受你的成就。",
            reversed: "過度樂觀導致判斷失準，或好的時光太過短暫。"
        },
        topics: {
            love: { upright: "熱情如火的一段時間，快樂是這段關係的代名詞。", reversed: "這段關係只看重表面歡樂，缺乏深度。" },
            career: { upright: "專案成功、成就被認可，邁向高峰。", reversed: "表面風光但問題暗藏，或成功來得快去得也快。" },
            finance: { upright: "財務狀況極佳，可能有意外之財。", reversed: "開銷變大，或好運只是暫時的。" },
            health: { upright: "活力充沛，身心狀態絕佳。", reversed: "別太得意忘形，忽略基本保健。" },
            decision: { upright: "陽光普照，做什麼決定都會往好的方向走。", reversed: "計畫可能過於樂觀，留點後路。" },
            daily: { upright: "今天是大吉日，享受這份溫暖與幸運。", reversed: "小心樂極生悲，別太囂張。" }
        }
    },
    {
        id: 20,
        name: "審判",
        general: {
            upright: "清算與重生的時刻。回應內心的召喚，決定你的未來。",
            reversed: "逃避過去的責任，或對自己的錯誤選擇視而不見。"
        },
        topics: {
            love: { upright: "與過去和解是必要的，可能與舊愛重逢或徹底告別。", reversed: "未解決的情史來糾纏，你需要做個了斷。" },
            career: { upright: "過往的功過被重新審視，可能有彌補或補償的機會。", reversed: "過去的錯誤被翻舊帳，需要面對。" },
            finance: { upright: "清算舊帳或收到賠償，財務翻新。", reversed: "過去的財務問題再次找上門。" },
            health: { upright: "徹底檢視生活方式，有些習慣需要改變。", reversed: "舊疾復發是在提醒你還沒真正解決問題。" },
            decision: { upright: "這是一個清算過往、重新開始的機會。", reversed: "你在逃避該面對的事實。" },
            daily: { upright: "今天適合回顧過去，修正錯誤。", reversed: "舊事重提讓你不舒服，但面對才能前進。" }
        }
    },
    {
        id: 21,
        name: "世界",
        general: {
            upright: "目標達成、旅程完成。你已經完成一個重要的循環。",
            reversed: "只差臨門一腳卻卡關，或以為結束了其實還沒有。"
        },
        topics: {
            love: { upright: "關係圓滿達成共識，承诺或婚約將實現。", reversed: "看似穩定但少了什麼，或你對現狀還不滿足。" },
            career: { upright: "專案順利結案，里程碑達成，準備下一個挑戰。", reversed: "最後關頭出問題，或功虧一簣的遺憾。" },
            finance: { upright: "目標達成，財務上的里程碑已經完成。", reversed: "金錢卡在最後一步，需要耐心等待。" },
            health: { upright: "身心完整和諧，保持這樣的狀態。", reversed: "感覺還差一點點康復，別急。" },
            decision: { upright: "目標已經達成，是時候驗收成果了。", reversed: "還需要一些調整，別急著宣布完成。" },
            daily: { upright: "今天是個里程碑，享受這份成就感。", reversed: "有完美主義作祟，夠好就好了。" }
        }
    },
    {
        id: 22,
        name: "權杖一",
        general: {
            upright: "全新的熱情與創造力爆發！這是點燃夢想的時刻。",
            reversed: "創意卡住、缺乏動力，或空有熱情卻遲遲不行動。"
        },
        topics: {
            love: { upright: "激情如火的新戀情，戀愛能量高漲。", reversed: "一時熱情退燒很快，或追求方式太過激烈嚇跑對方。" },
            career: { upright: "新專案、新領域，創意想法將被實現。", reversed: "虎頭蛇尾，開頭轟轟烈烈然後沒有下文。" },
            finance: { upright: "新財源出現，投資創意項目有好兆頭。", reversed: "對投資過度樂觀，評估風險不足。" },
            health: { upright: "精力充沛，適合開始新的運動或健身計畫。", reversed: "熱度三分鐘，運動三天捕魚兩天曬網。" },
            decision: { upright: "跟隨熱情做出決定，這是你想要的方向。", reversed: "熱情不等於理智，別被興奮沖昏頭。" },
            daily: { upright: "今天創意滿滿，執行力強，適合啟動新計畫。", reversed: "思緒混亂無法聚焦，做不重要的事先。" }
        }
    },
    {
        id: 23,
        name: "權杖二",
        general: {
            upright: "站在十字路口規劃未來。你有資源，需要做出選擇。",
            reversed: "選擇過多導致遲遲無法行動，或做出與內心不符的決定。"
        },
        topics: {
            love: { upright: "有多個選擇對象，需要想清楚自己要什麼。", reversed: "腳踏多條船遲早翻船，或太害怕選擇而逃避。" },
            career: { upright: "評估不同發展方向的好時機，收集情報。", reversed: "選錯方向會浪費時間，別草率決定。" },
            finance: { upright: "理財規劃需要審視，評估投資選項。", reversed: "猶豫不決錯過良機，或選錯投資標的。" },
            health: { upright: "評估目前的生活方式是否適合自己。", reversed: "嘗試錯誤的減肥或健身方法。" },
            decision: { upright: "收集資訊、比較選項，別急著下決定。", reversed: "選擇障礙發作，列出優缺點強迫自己選。" },
            daily: { upright: "今天適合思考未來方向，訂定計畫。", reversed: "想太多做太少，別讓自己陷入焦慮。" }
        }
    },
    {
        id: 24,
        name: "權杖三",
        general: {
            upright: "初步成果展現，等待中的回饋即將到來。",
            reversed: "期望落空、等待無果，或你的付出沒有被看見。"
        },
        topics: {
            love: { upright: "播種後的等待，對方正在考慮你的心意。", reversed: "對方已讀不回，或你的追求沒有得到回應。" },
            career: { upright: "專案有了進展，正在等待客戶或上級回覆。", reversed: "提案被打回票，或合作方遲遲不答覆。" },
            finance: { upright: "投資初步獲利中，需要耐心等待收割。", reversed: "獲利不如預期，或款項遲遲無法入帳。" },
            health: { upright: "身體在好轉中，持續調養會見成效。", reversed: "康復進度不如預期，需要更多耐心。" },
            decision: { upright: "已經邁出步伐，等待市場反饋中。", reversed: "你的行動還沒有得到認可，需要調整。" },
            daily: { upright: "今天可能會有好消息或新進展，耐心等待。", reversed: "等的人沒消沒息，做該做的事別乾著急。" }
        }
    },
    {
        id: 25,
        name: "權杖四",
        general: {
            upright: "慶祝與穩固的時刻。基礎已經打好，享受成果。",
            reversed: "過度安於現狀不願前進，或穩定的局面出現裂痕。"
        },
        topics: {
            love: { upright: "關係穩定成熟，考慮同居或訂婚的好時機。", reversed: "太過安逸失去激情，或有人不想安定下來。" },
            career: { upright: "工作環境和諧，團隊士氣高，適合計畫慶功。", reversed: "辦公室政治擾亂和諧，或對現狀感到倦怠。" },
            finance: { upright: "財務穩固，適合計劃長遠目標或家庭開支。", reversed: "過度消費破壞儲蓄，或穩定收入受到威脅。" },
            health: { upright: "生活作息穩定，身心狀況良好。", reversed: "久坐少動的代價開始浮現。" },
            decision: { upright: "已經做出不錯的選擇，現在是鞏固的時候。", reversed: "該踏出舒適圈了，你待太久了。" },
            daily: { upright: "今天適合與親友相聚，享受安定的生活。", reversed: "覺得無聊想找刺激，但小心樂極生悲。" }
        }
    },
    {
        id: 26,
        name: "權杖五",
        general: {
            upright: "競爭與衝突出現。但這是良性的挑戰，推動你成長。",
            reversed: "惡意競爭讓你心累，或你選擇退讓逃避衝突。"
        },
        topics: {
            love: { upright: "感情中的小爭執是正常的，溝通能解決。", reversed: "三角關係或多角糾紛，剪不斷理還亂。" },
            career: { upright: "與同事良性競爭，或專案遭遇挑戰需要克服。", reversed: "辦公室內鬥消耗能量，或有人針對你。" },
            finance: { upright: "理財上需要多方比較，別被單一選項迷惑。", reversed: "與人金錢往來產生糾紛。" },
            health: { upright: "高強度訓練帶來進步，但注意不要受傷。", reversed: "運動傷害風險高，或壓力導致緊張。" },
            decision: { upright: "多方競爭是正常的，展現你的實力。", reversed: "競爭對手實力太強，考慮是否值得。" },
            daily: { upright: "今天可能會有口角或競爭，保持風度。", reversed: "與人起衝突誰都沒好處，退一步海闊天空。" }
        }
    },
    {
        id: 27,
        name: "權杖六",
        general: {
            upright: "勝利與認可！你的努力被看見，榮耀屬於你。",
            reversed: "功勞被搶、鎂光燈不在你身上，或對成功感到空虛。"
        },
        topics: {
            love: { upright: "在感情中感到被重視與疼愛，戀情公開曬恩愛。", reversed: "覺得付出沒有得到對等回應，心生不滿。" },
            career: { upright: "升遷有望、業績達標，被公開表揚。", reversed: "功勞被同事或上司搶走，有苦說不出。" },
            finance: { upright: "收入增加或有獎金入帳，值得慶祝。", reversed: "預期收入落空，或財務好消息是別人的。" },
            health: { upright: "自信提升帶動身心狀態好轉。", reversed: "別因成功而得意忘形，忽略基本保健。" },
            decision: { upright: "你是贏家，這個決定將帶來成功。", reversed: "這次不是你想要的結果，檢討再出發。" },
            daily: { upright: "今天有機會獲得認可或好消息。", reversed: "低調點，別搶別人風頭。" }
        }
    },
    {
        id: 28,
        name: "權杖七",
        general: {
            upright: "防守反擊的時刻。面對挑戰，你必須站穩腳步反擊。",
            reversed: "節節敗退、士氣低落，或乾脆放棄抵抗。"
        },
        topics: {
            love: { upright: "為感情挺身而出，捍衛你們的關係。", reversed: "有人從中破壞，或你不想再爭了。" },
            career: { upright: "遭遇質疑或反對，用實力證明自己。", reversed: "工作量過大瀕臨崩潰，需要求援。" },
            finance: { upright: "財務受到威脅，需要積極保護資產。", reversed: "敵不過大環境變動，損失已成定局。" },
            health: { upright: "身體正在抵抗壓力，需要加強防護。", reversed: "免疫力下降，容易感冒或疲勞。" },
            decision: { upright: "有人反對是正常的，堅持你的立場。", reversed: "對手太強，評估是否值得繼續對抗。" },
            daily: { upright: "今天會有挑戰等著你，必須反擊。", reversed: "感到四面楚歌，保存實力別硬碰硬。" }
        }
    },
    {
        id: 29,
        name: "權杖八",
        general: {
            upright: "快速行動的時刻！機會稍縱即逝，把握當下。",
            reversed: "訊息混亂、計畫被打亂，或你被速度壓垮。"
        },
        topics: {
            love: { upright: "關係發展迅速，進展快到讓人眼花撩亂。", reversed: "對方來去太快，你跟不上節奏。" },
            career: { upright: "專案加速進行中，所有事情同時動起來。", reversed: "多頭馬車讓你應接不暇，需要優先排序。" },
            finance: { upright: "資金快速流動，投資機會出現。", reversed: "金錢進出太快，你無法掌控。" },
            health: { upright: "活力十足，但別讓自己太過緊繃。", reversed: "過度消耗導致體力透支，需要休息。" },
            decision: { upright: "時機不等人，趕快行動別猶豫。", reversed: "太快做決定容易出錯，慢下來。" },
            daily: { upright: "今天步調飛快，消化大量訊息。", reversed: "訊息太多造成混亂，選擇性接收。" }
        }
    },
    {
        id: 30,
        name: "權杖九",
        general: {
            upright: "最後的防線，堅持就是勝利。你已經撐很久了。",
            reversed: "身心俱疲想放棄，或過度防備讓你錯失機會。"
        },
        topics: {
            love: { upright: "雖然辛苦，但你還是不想放棄這段感情。", reversed: "心力交瘁，再愛也該考慮放手了。" },
            career: { upright: "專案最後衝刺階段，咬牙撐過就好。", reversed: "壓力大到快崩潰，考慮是否值得。" },
            finance: { upright: "財務壓力仍在，但曙光就在前方。", reversed: "長期財務困境讓你喘不過氣。" },
            health: { upright: "身體在告訴你累了，需要休息一下。", reversed: "過度疲勞累積成疾，別硬撐。" },
            decision: { upright: "再堅持一下，轉機就在不遠處。", reversed: "差不多了，該考慮撤退了。" },
            daily: { upright: "今天會有最後的挑戰撐過去就輕鬆了。", reversed: "繃太緊容易斷，給自己喘口氣。" }
        }
    },
    {
        id: 31,
        name: "權杖十",
        general: {
            upright: "責任過重需要分擔。你承担太多，是時候求助。",
            reversed: "被責任壓垮，或不願放手讓自己困在原地。"
        },
        topics: {
            love: { upright: "關係中的責任讓你喘不過氣，需要溝通分擔。", reversed: "一方付出過多不平衡，或被關係綁住。" },
            career: { upright: "工作量爆表，學會拒絕或委派任務。", reversed: "默默扛下所有，最終會壓垮自己。" },
            finance: { upright: "財務責任沉重，需要重新規劃分配。", reversed: "債務壓力大，入不敷出。" },
            health: { upright: "過勞警訊，身體在求救。", reversed: "已經過勞卻不肯停下，遲早出事。" },
            decision: { upright: "做決定前先減輕負擔，輕裝上陣。", reversed: "你扛了太多不該扛的，該丟就丟。" },
            daily: { upright: "今天任務繁重，學會說不。", reversed: "把自己逼太緊，該休息了。" }
        }
    },
    {
        id: 32,
        name: "權杖侍者",
        general: {
            upright: "年輕的熱情與創意帶來新氣象。保持好奇心。",
            reversed: "只有三分鐘熱度，或對事物過度理想化。"
        },
        topics: {
            love: { upright: "年輕活力的追求者出現，或重拾戀愛的純真感。", reversed: "對方太年輕不成熟，或你自己太孩子氣。" },
            career: { upright: "新進有熱情的同事，或接到創意新任務。", reversed: "新人太過理想化，需要歷練。" },
            finance: { upright: "小额投資或新理財方式可以嘗試。", reversed: "衝動消費年輕人的通病。" },
            health: { upright: "年輕的心態讓你充滿活力。", reversed: "別仗著年輕就糟蹋身體。" },
            decision: { upright: "用開放的心態接受新資訊。", reversed: "考慮事情不夠周全。" },
            daily: { upright: "今天好奇心旺盛，學新東西有好運。", reversed: "計畫很多但執行力不足。" }
        }
    },
    {
        id: 33,
        name: "權杖騎士",
        general: {
            upright: "行動力十足的冒險家。說走就走，充滿魅力。",
            reversed: "衝動行事不顧後果，或事情突然中斷停擺。"
        },
        topics: {
            love: { upright: "熱情追求中，可能有閃電般的戀情。", reversed: "對方來去匆匆，或你太過猴急嚇跑人。" },
            career: { upright: "跳槽或轉換跑道的好時機，行動吧。", reversed: "衝動換工作可能會後悔。" },
            finance: { upright: "有大膽的投資機會，但要先評估風險。", reversed: "衝動投資讓你後悔莫及。" },
            health: { upright: "活動力強，適合戶外運動。", reversed: "運動受傷風險高，慢下來。" },
            decision: { upright: "決定了就不要猶豫，快速執行。", reversed: "太快做決定會出錯，先暫緩。" },
            daily: { upright: "今天行動力爆表，但別太衝動。", reversed: "計畫被打斷或臨時取消，保持彈性。" }
        }
    },
    {
        id: 34,
        name: "權杖王后",
        general: {
            upright: "自信與熱情並存的魅力女性。溫暖而強大。",
            reversed: "控制不住情緒，或過度強勢讓人卻步。"
        },
        topics: {
            love: { upright: "自信的魅力讓你桃花朵朵，但小心選擇。", reversed: "脾氣火爆嚇跑潛在對象。" },
            career: { upright: "女性主管展現領導力，團隊士氣高漲。", reversed: "情緒化的管理方式造成問題。" },
            finance: { upright: "理財有道，投資眼光準確。", reversed: "開銷過大需要節制。" },
            health: { upright: "活力充沛，展現女性自信美。", reversed: "注意肝火或內分泌問題。" },
            decision: { upright: "信任你的直覺和判斷力。", reversed: "別被情緒左右，冷靜再說。" },
            daily: { upright: "今天展現你的魅力和能力吧。", reversed: "控制脾氣，別對無關的人發火。" }
        }
    },
    {
        id: 35,
        name: "權杖國王",
        general: {
            upright: "權威與創意的結合。說到做到，領導力十足。",
            reversed: "固執己見，或有權力的人打壓你的創意。"
        },
        topics: {
            love: { upright: "成熟穩重的伴侶，或你以領導者姿態經營感情。", reversed: "大男人主義讓關係緊張。" },
            career: { upright: "晉升管理階層或獨當一面創業。", reversed: "遇到固執的上司壓制你的想法。" },
            finance: { upright: "投資眼光精準，財務自主。", reversed: "固執己見做了錯誤投資。" },
            health: { upright: "掌控自己的健康生活。", reversed: "不良習慣需要改變。" },
            decision: { upright: "這是你的領域，你說了算。", reversed: "太過強勢反而適得其反。" },
            daily: { upright: "今天展現你的專業與權威。", reversed: "別什麼都想控制，學會放手。" }
        }
    },
    {
        id: 36,
        name: "聖杯一",
        general: {
            upright: "情感的洪流湧入。新的愛、新的滋養、新的滋潤。",
            reversed: "情感空虛或乾涸，或新的感動被恐懼阻擋。"
        },
        topics: {
            love: { upright: "心動的感覺來襲，可能是一見鍾情或重燃愛火。", reversed: "對愛失望害怕投入，或暗戀遲遲不敢表達。" },
            career: { upright: "工作帶來滿足感，團隊氣氛和諧。", reversed: "對工作失去熱情，或職場人際讓你心累。" },
            finance: { upright: "有人情味的金錢往來，或獲得感性投資支持。", reversed: "為情緒买单導致浪費。" },
            health: { upright: "情緒平穩，身心被滋養。", reversed: "情緒影響健康，注意憂鬱傾向。" },
            decision: { upright: "跟隨心的指引，感性與理性並重。", reversed: "不要壓抑情緒，承認你的真實感受。" },
            daily: { upright: "今天內心溫暖，容易被小事感動。", reversed: "情緒低落，對什麼都提不起勁。" }
        }
    },
    {
        id: 37,
        name: "聖杯二",
        general: {
            upright: "雙人連結的開始。彼此吸引、互相理解。",
            reversed: "關係發展停滯，或二人之間有阻礙難以跨越。"
        },
        topics: {
            love: { upright: "兩情相悅的美好時刻，關係急速升溫。", reversed: "一方熱一方冷，或暧昧对象變卦。" },
            career: { upright: "良好的合作關係，伙伴配對成功。", reversed: "合作對象不靠譜或理念不合。" },
            finance: { upright: "適合與人合資或共同理財。", reversed: "金錢上的AA制或分帳問題。" },
            health: { upright: "關係和諧帶來身心平衡。", reversed: "注意兩人相處模式對健康的影響。" },
            decision: { upright: "這是雙人的決定，需要對方配合。", reversed: "對方態度不明，你的熱情被澆冷水。" },
            daily: { upright: "今天適合與重要的人深度交流。", reversed: "溝通不順，誤解頻生。" }
        }
    },
    {
        id: 38,
        name: "聖杯三",
        general: {
            upright: "歡慶與友誼的時刻。與重要的人共享美好時光。",
            reversed: "酒肉朋友散去，或熱鬧過後的空虛感。"
        },
        topics: {
            love: { upright: "戀情獲得朋友祝福，或三人友誼關係穩定。", reversed: "朋友對這段關係有意見。" },
            career: { upright: "團隊慶功、順利達成目標，同事情誼增加。", reversed: "辦公室社交活動讓你疲憊。" },
            finance: { upright: "慶祝消費或人情開支增加。", reversed: "聚會花費超出預算。" },
            health: { upright: "社交活動讓你心情愉快。", reversed: "酒喝多了傷身，節制。" },
            decision: { upright: "需要他人建議時機成熟。", reversed: "朋友意見太多反而混淆判斷。" },
            daily: { upright: "今天適合聚會或與朋友相處。", reversed: "熱鬧是別人的，孤獨是你的。" }
        }
    },
    {
        id: 39,
        name: "聖杯四",
        general: {
            upright: "倦怠與不滿足。現有的一切都無法滿足你。",
            reversed: "拒絕眼前的機會，或選擇性忽視被給予的善意。"
        },
        topics: {
            love: { upright: "對現有關係感到無聊，想要新鮮感。", reversed: "有新機會但你不願嘗試。" },
            career: { upright: "對工作產生倦怠，看不到未來。", reversed: "有更好的機會但你錯過了。" },
            finance: { upright: "對財務狀況不滿足，想要更多。", reversed: "有人要給你幫助但你拒絕。" },
            health: { upright: "身體健康但精神不振。", reversed: "無精打采需要刺激。" },
            decision: { upright: "停下腳步審視內心真正想要什麼。", reversed: "別太挑剔，機會不會永遠等著你。" },
            daily: { upright: "今天提不起勁，做白日夢比較多。", reversed: "有機會上門但你不賞臉。" }
        }
    },
    {
        id: 40,
        name: "聖杯五",
        general: {
            upright: "失落與悲傷。失去的痛是真實的，但轉機在後。",
            reversed: "困在悲傷中不願前進，或否認失去的事實。"
        },
        topics: {
            love: { upright: "失戀或關係破裂，但往前看會有新機會。", reversed: "還在療傷走不出來。" },
            career: { upright: "專案失敗或丟掉工作，但塞翁失馬。", reversed: "執著於過去的失敗。" },
            finance: { upright: "財務損失無法挽回，接受並重新開始。", reversed: "一直糾結損失的錢。" },
            health: { upright: "身體不適需要照顧，但會康復。", reversed: "過度擔憂反而影響恢復。" },
            decision: { upright: "接受這個失敗，從廢墟中站起來。", reversed: "別再自怨自艾了。" },
            daily: { upright: "今天可能會有些低落，但會好轉。", reversed: "沉溺在負面情緒中。" }
        }
    },
    {
        id: 41,
        name: "聖杯六",
        general: {
            upright: "回到單純的過去。懷舊、重逢、童心的回歸。",
            reversed: "困在過去不願成長，或舊人回來不見得是好事。"
        },
        topics: {
            love: { upright: "舊愛重逢或重溫初戀的美好。", reversed: "過去的陰影影響現有關係。" },
            career: { upright: "回到過去熟悉的領域，或前輩指導。", reversed: "過往的經驗不再適用。" },
            finance: { upright: "收到過去的款項或人情還債。", reversed: "過去的財務問題糾纏。" },
            health: { upright: "回憶童年或故鄉有益身心。", reversed: "懷舊過度逃避現實。" },
            decision: { upright: "過去的經驗能幫助你做決定。", reversed: "別用舊思維解決新問題。" },
            daily: { upright: "今天適合聯絡舊友或回顧過去。", reversed: "別一直活在過去。" }
        }
    },
    {
        id: 42,
        name: "聖杯七",
        general: {
            upright: "選擇過多的困惑。夢想與幻想交織，需要看清真相。",
            reversed: "逃避現實沉溺幻想，或選擇太過理想化不切實際。"
        },
        topics: {
            love: { upright: "選擇太多不知道要哪個，或對方不是你想的那樣。", reversed: "愛上幻想而非真實的人。" },
            career: { upright: "機會太多不知道怎麼選，評估清楚。", reversed: "每個機會都被你美化。" },
            finance: { upright: "投資選擇讓你眼花撩亂，別被騙。", reversed: "被美麗的承諾誘惑。" },
            health: { upright: "身體問題可能來自幻想或壓力。", reversed: "對健康過度焦慮。" },
            decision: { upright: "列出所有選項，別被表象迷惑。", reversed: "你在自欺欺人，醒醒。" },
            daily: { upright: "今天頭腦混亂，別做重大決定。", reversed: "活在夢裡不是辦法。" }
        }
    },
    {
        id: 43,
        name: "聖杯八",
        general: {
            upright: "放棄現有追尋更好的。離開是為了更美好的未來。",
            reversed: "不甘心離開或離開後又後悔。"
        },
        topics: {
            love: { upright: "發現這段關係不是你要的，勇敢離開。", reversed: "離開了又回頭糾纏。" },
            career: { upright: "對現職失望，準備跳槽找新方向。", reversed: "對新工作又開始不滿意。" },
            finance: { upright: "放棄這個投資找下一個機會。", reversed: "太早放棄可能會後悔。" },
            health: { upright: "放棄不健康的生活方式，重新開始。", reversed: "舊習難改又回頭。" },
            decision: { upright: "離開現在的選項，外面有更好的。", reversed: "你真的準備好離開了嗎。" },
            daily: { upright: "今天可能會有重大決定或離開某個情境。", reversed: "對離開感到猶豫不捨。" }
        }
    },
    {
        id: 44,
        name: "聖杯九",
        general: {
            upright: "願望成真的喜悅。你得到了你想要的。",
            reversed: "以為得到但實際不然，或慾望永遠無法滿足。"
        },
        topics: {
            love: { upright: "感情如願以償，理想中的戀情成真。", reversed: "在一起了卻沒有想像中快樂。" },
            career: { upright: "目標達成、獲得理想職位。", reversed: "得到後發現不是想要的。" },
            finance: { upright: "財務願望實現，購物清單達成。", reversed: "買了之後又後悔。" },
            health: { upright: "身體恢復健康，達成健身目標。", reversed: "健康問題仍未解決。" },
            decision: { upright: "這個決定會讓你滿意。", reversed: "別高興太早，結果可能不如預期。" },
            daily: { upright: "今天願望可能成真，開心享受。", reversed: "別太得意忘形。" }
        }
    },
    {
        id: 45,
        name: "聖杯十",
        general: {
            upright: "家庭與諧的圓滿。愛與歸屬感充滿你的生活。",
            reversed: "家庭失和或表面的和諧掩蓋了問題。"
        },
        topics: {
            love: { upright: "關係獲得家庭認可，或考慮結婚生子。", reversed: "婆媳問題或家庭反對這段關係。" },
            career: { upright: "工作與家庭達到平衡，感到滿足。", reversed: "家庭因素影響工作表現。" },
            finance: { upright: "家庭財務穩定，適合買房或大家庭計畫。", reversed: "家庭開支讓你壓力大。" },
            health: { upright: "家庭支持系統健全，身心安穩。", reversed: "家庭問題讓你身心俱疲。" },
            decision: { upright: "家庭相關的決定會往好的方向走。", reversed: "家庭不是永遠的避風港。" },
            daily: { upright: "今天適合與家人共度美好時光。", reversed: "家庭聚會可能有摩擦。" }
        }
    },
    {
        id: 46,
        name: "聖杯侍者",
        general: {
            upright: "帶著純真與好奇的情感使者。有好消息要來。",
            reversed: "情緒化、敏感過度，或消息讓你失望。"
        },
        topics: {
            love: { upright: "年輕的追求者或純真的情書。", reversed: "對方太情緒化或幼稚。" },
            career: { upright: "創意提案或情感相關的工作機會。", reversed: "對工作太過感性。" },
            finance: { upright: "小額意外之財或紅包。", reversed: "為情緒買單。" },
            health: { upright: "恢復赤子之心對健康有益。", reversed: "情緒波動影響腸胃。" },
            decision: { upright: "用開放的心接受新消息。", reversed: "別讓情緒影響判斷。" },
            daily: { upright: "今天有溫暖的消息或驚喜。", reversed: "消息讓你心情起伏。" }
        }
    },
    {
        id: 47,
        name: "聖杯騎士",
        general: {
            upright: "浪漫的追求者正在路上。充滿魅力與理想。",
            reversed: "空有浪漫不切實際，或承諾遲遲不兌現。"
        },
        topics: {
            love: { upright: "浪漫的追求者即將出現或正在追求你。", reversed: "對方只說不做，讓你失望。" },
            career: { upright: "有創意又有熱情的提案正在進行。", reversed: "計畫浪漫但不切實際。" },
            finance: { upright: "有藝術氣息的投資或收入。", reversed: "別被浪漫的承諾騙錢。" },
            health: { upright: "身心需要浪漫的滋養。", reversed: "過度理想化健康狀況。" },
            decision: { upright: "跟隨心的羅曼蒂克指引。", reversed: "不要被甜言蜜語迷惑。" },
            daily: { upright: "今天可能會有浪漫的邂逅。", reversed: "期待落空的感覺。" }
        }
    },
    {
        id: 48,
        name: "聖杯王后",
        general: {
            upright: "溫柔而敏感的直覺者。充滿同理心與理解。",
            reversed: "過度敏感或情緒氾濫，需要設立界線。"
        },
        topics: {
            love: { upright: "温柔體貼的伴侶，或你以這樣的方式愛人。", reversed: "太過敏感對方壓力大。" },
            career: { upright: "需要同理心的職場，如輔導或療癒。", reversed: "情緒被工作消耗。" },
            finance: { upright: "直覺投資或有愛心的理財。", reversed: "為同情心花冤枉錢。" },
            health: { upright: "注意情緒健康，適合藝術療癒。", reversed: "情緒問題影響身體。" },
            decision: { upright: "信任你的直覺和感受。", reversed: "別讓情緒主導決定。" },
            daily: { upright: "今天展現你的温柔與同理心。", reversed: "情緒滿溢需要出口。" }
        }
    },
    {
        id: 49,
        name: "聖杯國王",
        general: {
            upright: "情緒穩定的領導者。成熟、不情緒化、有智慧。",
            reversed: "壓抑情緒到極限，或表面冷靜內心翻湧。"
        },
        topics: {
            love: { upright: "成熟穩重的伴侶，情感和智慧兼備。", reversed: "壓抑情感導致隔閡。" },
            career: { upright: "情緒智商高的主管，團隊氣氛佳。", reversed: "有人情緒失控影響團隊。" },
            finance: { upright: "穩健的財務管理，有長遠規劃。", reversed: "過度保守錯失機會。" },
            health: { upright: "情緒管理得當，身心平衡。", reversed: "壓力大但強裝沒事。" },
            decision: { upright: "冷靜理性的情感決策。", reversed: "別再壓抑了，正視感受。" },
            daily: { upright: "今天情緒穩定，適合處理複雜事務。", reversed: "內心波瀾但表面鎮定。" }
        }
    },
    {
        id: 50,
        name: "寶劍一",
        general: {
            upright: "思維清晰的新突破！真相大白，智慧降臨。",
            reversed: "思維混亂、偏見誤導，或錯誤的判斷。"
        },
        topics: {
            love: { upright: "清晰的溝通能解決誤會，說開就好。", reversed: "言語傷人，或無法表達真實感受。" },
            career: { upright: "新想法被採納，問題迎刃而解。", reversed: "思路卡住，需要換個角度。" },
            finance: { upright: "新的理財策略或投資機會出現。", reversed: "被錯誤資訊誤導造成損失。" },
            health: { upright: "頭腦清晰，有助於做出健康決定。", reversed: "精神無法集中，或偏頭痛。" },
            decision: { upright: "現在思路清晰，適合做重大決定。", reversed: "別急，等思緒清楚再說。" },
            daily: { upright: "今天頭腦特別清楚，把握這個優勢。", reversed: "思緒混亂，做簡單的事就好。" }
        }
    },
    {
        id: 51,
        name: "寶劍二",
        general: {
            upright: "兩難的困境。你需要做出選擇，但雙方都有代價。",
            reversed: "逃避選擇、或被迫做出不情願的決定。"
        },
        topics: {
            love: { upright: "兩個選擇之間為難，無法決定。", reversed: "被迫選擇或逃避面對。" },
            career: { upright: "兩個工作機會各有優劣，需要取捨。", reversed: "兩個都想要最後可能都得不到。" },
            finance: { upright: "投資選擇讓你為難，需要評估。", reversed: "拖延決策可能錯過時機。" },
            health: { upright: "需要做醫療決定，尋求第二意見。", reversed: "逃避健康問題。" },
            decision: { upright: "列出優缺點，勇敢做出選擇。", reversed: "不能再拖了，遲早要面對。" },
            daily: { upright: "今天可能會面臨兩難，別逃避。", reversed: "選擇障礙發作，隨便選一個吧。" }
        }
    },
    {
        id: 52,
        name: "寶劍三",
        general: {
            upright: "心痛與悲傷。背叛、失落、或言語的傷害。",
            reversed: "傷口仍在但正在癒合中，或不願面對現實。"
        },
        topics: {
            love: { upright: "失戀或被背叛，心碎的感觉。", reversed: "還在療傷中，或假装不在乎。" },
            career: { upright: "工作上的打擊或被同事排擠。", reversed: "職場人際傷害仍在發酵。" },
            finance: { upright: "財務損失或金錢糾紛帶來的痛苦。", reversed: "損失已造成，正在接受中。" },
            health: { upright: "心臟或情緒相關的健康問題。", reversed: "情緒影響心臟健康。" },
            decision: { upright: "這個決定可能會讓你心痛。", reversed: "別為了怕痛而逃避。" },
            daily: { upright: "今天可能會聽到壞消息或感到難過。", reversed: "傷心的事暫時擱置。" }
        }
    },
    {
        id: 53,
        name: "寶劍四",
        general: {
            upright: "暫時的休息與恢復。讓自己暫停一下。",
            reversed: "休息夠了該起來了，或強迫自己休息。"
        },
        topics: {
            love: { upright: "關係需要空間，給彼此喘息時間。", reversed: "休息太久關係變冷淡。" },
            career: { upright: "工作疲累，適度休息後再出發。", reversed: "休息時還在擔心工作。" },
            finance: { upright: "財務暫時穩定，可以喘口氣。", reversed: "休息時也要注意開源節流。" },
            health: { upright: "身體需要休息，睡眠不足的補救。", reversed: "躺太久反而更累。" },
            decision: { upright: "先暫停一下，讓思緒沉澱。", reversed: "別以休息之名逃避。" },
            daily: { upright: "今天適合休息放空，別給自己壓力。", reversed: "休息時間結束了。" }
        }
    },
    {
        id: 54,
        name: "寶劍五",
        general: {
            upright: "衝突與失敗。言語爭吵，兩敗俱傷。",
            reversed: "衝突暫時平息，或有人願意退讓。"
        },
        topics: {
            love: { upright: "爭吵後的兩敗俱傷，言語衝突。", reversed: "願意和解或溝通。" },
            career: { upright: "競爭失敗或團隊內鬥。", reversed: "衝突過後需要修復關係。" },
            finance: { upright: "金錢糾紛或投資損失。", reversed: "損失已造成，學習教訓。" },
            health: { upright: "壓力大導致身心俱疲。", reversed: "衝突後需要恢復。" },
            decision: { upright: "這個決定可能引發衝突。", reversed: "避免正面衝突。" },
            daily: { upright: "今天容易有口角，說話小心。", reversed: "退一步海闊天空。" }
        }
    },
    {
        id: 55,
        name: "寶劍六",
        general: {
            upright: "過渡與康復。離開困境，往更好的方向前進。",
            reversed: "前進緩慢或卡在中間不上不下。"
        },
        topics: {
            love: { upright: "走出情傷低谷，慢慢恢復中。", reversed: "傷痛還在，恢復不如預期。" },
            career: { upright: "轉換跑道或離開困境的職場。", reversed: "新環境適應不良。" },
            finance: { upright: "財務狀況逐漸好轉。", reversed: "恢復速度比預期慢。" },
            health: { upright: "康復中，漸入佳境。", reversed: "康復之路漫長。" },
            decision: { upright: "這是前進的決定，勇敢邁出。", reversed: "前進方向還不明確。" },
            daily: { upright: "今天適合整理思緒，重新出發。", reversed: "還在過渡期，慢慢來。" }
        }
    },
    {
        id: 56,
        name: "寶劍七",
        general: {
            upright: "欺騙與策略。可能有竊取或背叛，需要警惕。",
            reversed: "欺騙被揭穿，或你對自己誠實。"
        },
        topics: {
            love: { upright: "伴侶有事瞞著你，或有人暗戀你。", reversed: "秘密被發現或你選擇說實話。" },
            career: { upright: "有人暗中搞鬼或竊取你的功勞。", reversed: "你的計畫被識破。" },
            finance: { upright: "小心被騙或有人借錢不還。", reversed: "及時發現避免損失。" },
            health: { upright: "隱瞞病情或對健康自欺欺人。", reversed: "願意面對問題。" },
            decision: { upright: "做決定前先確認資訊是否正確。", reversed: "你在欺騙自己嗎。" },
            daily: { upright: "今天對人和事保持警覺。", reversed: "有人對你說謊。" }
        }
    },
    {
        id: 57,
        name: "寶劍八",
        general: {
            upright: "被困住的感覺。自我設限或外界限制讓你動彈不得。",
            reversed: "打破限制的契機，或你選擇繼續困住自己。"
        },
        topics: {
            love: { upright: "被困在不健康的關係中無法離開。", reversed: "有機會離開但你不敢。" },
            career: { upright: "工作受限無法發揮，或被困在原地。", reversed: "準備打破僵局。" },
            finance: { upright: "財務受限或欠款讓你動彈不得。", reversed: "找到解套方法。" },
            health: { upright: "行動受限影響健康。", reversed: "突破自我設限。" },
            decision: { upright: "你比自己想像的自由，勇敢選擇。", reversed: "別再找藉口了。" },
            daily: { upright: "今天感到處處受限，换個角度看問題。", reversed: "限制可能只是你的想像。" }
        }
    },
    {
        id: 58,
        name: "寶劍九",
        general: {
            upright: "焦慮與恐懼的深淵。過度擔憂，噩夢連連。",
            reversed: "焦慮逐漸消退，或開始面對恐懼。"
        },
        topics: {
            love: { upright: "對感情過度焦慮，缺乏安全感。", reversed: "開始放下過度擔憂。" },
            career: { upright: "工作壓力大，擔心表現不好。", reversed: "焦慮來源逐漸清晰。" },
            finance: { upright: "對財務狀況過度焦慮。", reversed: "狀況沒那麼糟，放輕鬆。" },
            health: { upright: "焦慮影響睡眠和健康。", reversed: "壓力正在釋放。" },
            decision: { upright: "不要被焦慮左右決定。", reversed: "深呼吸，問題沒那麼大。" },
            daily: { upright: "今天可能會焦慮不安，試著放鬆。", reversed: "焦慮情緒正在好轉。" }
        }
    },
    {
        id: 59,
        name: "寶劍十",
        general: {
            upright: "最低谷的痛。徹底的失敗或結束，但也是新生的開始。",
            reversed: "最糟的已經過去了，復原之路開啟。"
        },
        topics: {
            love: { upright: "戀情徹底結束，傷透心。", reversed: "分手的痛開始淡化。" },
            career: { upright: "事業跌入谷底，慘敗。", reversed: "最糟的過去了，慢慢站起來。" },
            finance: { upright: "財務徹底破產或重大損失。", reversed: "開始重建財務。" },
            health: { upright: "健康嚴重出問題，需要重視。", reversed: "病情開始好轉。" },
            decision: { upright: "這個決定讓你徹底失敗。", reversed: "失敗是為了更好的開始。" },
            daily: { upright: "今天會很難熬，但會過去的。", reversed: "最壞的已經過了。" }
        }
    },
    {
        id: 60,
        name: "寶劍侍者",
        general: {
            upright: "年輕的好奇心與機敏。新聞或訊息即將到來。",
            reversed: "傳閒話或太過尖銳傷人。"
        },
        topics: {
            love: { upright: "年輕活潑的追求者，或新的戀愛消息。", reversed: "對方太幼稚或說話太傷人。" },
            career: { upright: "新消息或需要你用機智解決問題。", reversed: "八卦纏身。" },
            finance: { upright: "有小額錢財流動或理財新資訊。", reversed: "花錢買了不必要的東西。" },
            health: { upright: "活力充沛但說話太直。", reversed: "注意說話方式傷人。" },
            decision: { upright: "收集更多資訊再做決定。", reversed: "消息可能不準確。" },
            daily: { upright: "今天會有新消息或需要動腦。", reversed: "小心說話太衝。" }
        }
    },
    {
        id: 61,
        name: "寶劍騎士",
        general: {
            upright: "快速行動的思考者。衝勁十足但可能太過激進。",
            reversed: "衝動誤事或計畫突然中斷。"
        },
        topics: {
            love: { upright: "熱烈但快速的追求，可能閃電戀愛。", reversed: "對方來去太快。" },
            career: { upright: "迅速執行任務，效率驚人。", reversed: "太衝動犯錯。" },
            finance: { upright: "快速投資或錢財迅速進帳。", reversed: "衝動消費或投資錯誤。" },
            health: { upright: "動作快但要小心受傷。", reversed: "急性子導致血壓高。" },
            decision: { upright: "快速做出決定並執行。", reversed: "太快做決定會後悔。" },
            daily: { upright: "今天步調飛快，效率高。", reversed: "計畫被打亂需要調整。" }
        }
    },
    {
        id: 62,
        name: "寶劍王后",
        general: {
            upright: "聰明而直接的女性。理性、清晰、有洞察力。",
            reversed: "過度批評或冷漠無情。"
        },
        topics: {
            love: { upright: "理性又聰明的女性伴侶。", reversed: "說話太犀利傷人。" },
            career: { upright: "女主管聰明果斷，分析能力強。", reversed: "太嚴格不近人情。" },
            finance: { upright: "理財有道，判斷精準。", reversed: "太計較金錢得失。" },
            health: { upright: "理性看待健康問題。", reversed: "對身體狀況過度擔憂。" },
            decision: { upright: "用理性分析做決定。", reversed: "別太冷漠忽視感受。" },
            daily: { upright: "今天保持邏輯清晰處理事情。", reversed: "說話太直接得罪人。" }
        }
    },
    {
        id: 63,
        name: "寶劍國王",
        general: {
            upright: "權威與公正的判決者。理性、邏輯、正義。",
            reversed: "固執己見或濫用權力。"
        },
        topics: {
            love: { upright: "成熟理性的男性伴侶或決定。", reversed: "大男人主義或不講理。" },
            career: { upright: "上司公正嚴明，是非分明。", reversed: "遇到固執的上司。" },
            finance: { upright: "穩健的財務管理。", reversed: "過度節儉或吝嗇。" },
            health: { upright: "理性看待健康，保持規律。", reversed: "忽視身體警訊。" },
            decision: { upright: "這是公正客觀的決定。", reversed: "別太固執己見。" },
            daily: { upright: "今天需要冷靜理性處理事情。", reversed: "避免爭辯或判決他人。" }
        }
    },
    {
        id: 64,
        name: "錢幣一",
        general: {
            upright: "物質與財務的新開始。機會降臨，豐盛到來。",
            reversed: "機會未成熟或金錢問題阻礙新計畫。"
        },
        topics: {
            love: { upright: "穩定的關係基礎，或考慮共同財務規劃。", reversed: "物質條件影響感情發展。" },
            career: { upright: "新工作機會或專案啟動。", reversed: "機會不錯但時機不對。" },
            finance: { upright: "新收入來源或投資機會。", reversed: "財務規劃被打亂。" },
            health: { upright: "身體狀況良好，適合開始健身計畫。", reversed: "需要花錢解決健康問題。" },
            decision: { upright: "這個決定對物質層面有利。", reversed: "再等等，時機未成熟。" },
            daily: { upright: "今天有賺錢或獲得資源的機會。", reversed: "金錢方面需要謹慎。" }
        }
    },
    {
        id: 65,
        name: "錢幣二",
        general: {
            upright: "平衡與取捨。在兩個財務選項間尋找平衡點。",
            reversed: "財務失衡或無法兼顧兩邊。"
        },
        topics: {
            love: { upright: "約會開支需要平衡，或雙方經濟觀相近。", reversed: "金錢價值觀差異產生摩擦。" },
            career: { upright: "處理多個專案或收入來源。", reversed: "無法同時應付多件事。" },
            finance: { upright: "收支平衡，或需要理債規劃。", reversed: "財務吃緊，拆東牆補西牆。" },
            health: { upright: "生活作息需要調整平衡。", reversed: "忙碌導致生活失衡。" },
            decision: { upright: "魚與熊掌需要取捨。", reversed: "別太貪心，專注一件事。" },
            daily: { upright: "今天需要多工處理事務。", reversed: "別把自己逼太緊。" }
        }
    },
    {
        id: 66,
        name: "錢幣三",
        general: {
            upright: "團隊合作與專業。技能獲得認可，合作順利。",
            reversed: "合作不順或專業能力被質疑。"
        },
        topics: {
            love: { upright: "關係需要共同經營，或討論未來計畫。", reversed: "伴侶不支持你的計畫。" },
            career: { upright: "團隊合作順利，專案有所進展。", reversed: "同事不配合或能力不足。" },
            finance: { upright: "合夥投資獲利或共同理財。", reversed: "合夥出現問題。" },
            health: { upright: "團隊運動或專業醫療協助。", reversed: "治療效果不如預期。" },
            decision: { upright: "需要團隊討論後再做決定。", reversed: "別人無法幫你做決定。" },
            daily: { upright: "今天工作上需要與人合作。", reversed: "單獨完成反而更好。" }
        }
    },
    {
        id: 67,
        name: "錢幣四",
        general: {
            upright: "財務穩固與保守。守住現有資源，不輕易冒險。",
            reversed: "過度守財或對金錢過度焦慮。"
        },
        topics: {
            love: { upright: "在關係中尋求安全感，不輕易付出。", reversed: "對感情太過保守或占有欲強。" },
            career: { upright: "穩定的工作，需要守住職位。", reversed: "對工作太過安逸不求變。" },
            finance: { upright: "儲蓄增加，財務穩固。", reversed: "太省錢導致生活品質下降。" },
            health: { upright: "身體狀況穩定，繼續保持。", reversed: "過度擔憂健康。" },
            decision: { upright: "保守決定，確保穩定。", reversed: "別因為害怕失去而錯過機會。" },
            daily: { upright: "今天適合理財或檢視財務狀況。", reversed: "對金錢太過執著。" }
        }
    },
    {
        id: 68,
        name: "錢幣五",
        general: {
            upright: "財務困境與孤獨。遇到經濟困難或感到被遺棄。",
            reversed: "走出困境或接受幫助走出低潮。"
        },
        topics: {
            love: { upright: "經濟問題影響感情，感到孤獨無助。", reversed: "願意一起面對困難。" },
            career: { upright: "失業或收入銳減，財務困難。", reversed: "即將度過難關。" },
            finance: { upright: "財務危機或缺錢的困境。", reversed: "獲得補助或解決方案。" },
            health: { upright: "健康問題造成經濟負擔。", reversed: "狀況好轉中。" },
            decision: { upright: "這個決定可能造成財務壓力。", reversed: "尋求協助不是丟臉的事。" },
            daily: { upright: "今天可能會感到經濟壓力或孤獨。", reversed: "會有人伸出援手。" }
        }
    },
    {
        id: 69,
        name: "錢幣六",
        general: {
            upright: "慷慨與分享。給予與接受的平衡，財務上的和諧。",
            reversed: "給予不均或接受時感到愧疚。"
        },
        topics: {
            love: { upright: "在關係中慷慨付出，也樂於接受。", reversed: "付出與回報不成正比。" },
            career: { upright: "薪水調整或獲得獎金，或幫助下屬。", reversed: "覺得付出多回報少。" },
            finance: { upright: "收到禮物或別人還錢，或捐款助人。", reversed: "借出去的錢遲遲不還。" },
            health: { upright: "分享健康知識或獲得健康支援。", reversed: "覺得健康投資不值得。" },
            decision: { upright: "這個決定能讓資源平均分配。", reversed: "公平不是均分。" },
            daily: { upright: "今天有機會給予或收到禮物。", reversed: "金錢往來要小心。" }
        }
    },
    {
        id: 70,
        name: "錢幣七",
        general: {
            upright: "等待與評估。投資需要時間，成果需要耐心。",
            reversed: "成果不如預期或需要重新評估。"
        },
        topics: {
            love: { upright: "關係需要時間培養，耐心等待。", reversed: "付出很多但看不到回報。" },
            career: { upright: "專案正在醞釀，需要持續投入。", reversed: "懷疑選擇是否正確。" },
            finance: { upright: "投資需要長期持有，耐心等待回報。", reversed: "需要考慮止損或調整。" },
            health: { upright: "健康需要長期調養。", reversed: "短期效果不如預期。" },
            decision: { upright: "給計畫一些時間觀察成效。", reversed: "重新評估你的投入。" },
            daily: { upright: "今天適合檢視過去的付出與收穫。", reversed: "對現況感到不滿。" }
        }
    },
    {
        id: 71,
        name: "錢幣八",
        general: {
            upright: "勤奮與精進。努力工作，專注技能提升。",
            reversed: "過度工作或技能未被認可。"
        },
        topics: {
            love: { upright: "為未來努力，兩人都在進步。", reversed: "忙於工作忽略感情。" },
            career: { upright: "加班或進修，專業能力提升。", reversed: "付出很多但沒被看見。" },
            finance: { upright: "正職收入增加或接案賺錢。", reversed: "工作過度但收入有限。" },
            health: { upright: "規律運動或工作帶來身體勞動。", reversed: "過勞影響健康。" },
            decision: { upright: "持續努力會有回報。", reversed: "要注意身體負荷。" },
            daily: { upright: "今天適合認真工作或學習新技能。", reversed: "別把自己累壞了。" }
        }
    },
    {
        id: 72,
        name: "錢幣九",
        general: {
            upright: "財務獨立與自律。享受努力帶來的成果，優雅而自信。",
            reversed: "金錢來得快去得快，或過度炫耀。"
        },
        topics: {
            love: { upright: "經濟獨立讓你有底氣選擇伴侶。", reversed: "用金錢衡量感情。" },
            career: { upright: "專業成就獲得認可，收入豐厚。", reversed: "覺得自己可以退休了。" },
            finance: { upright: "財務自由，享受成果。", reversed: "奢侈消費導致財務吃緊。" },
            health: { upright: "有餘力關注健康與生活品質。", reversed: "對健康過度自信。" },
            decision: { upright: "這個決定讓你享有更多自由。", reversed: "別因為有錢就亂決定。" },
            daily: { upright: "今天可以好好享受一下。", reversed: "低調點，別太張揚。" }
        }
    },
    {
        id: 73,
        name: "錢幣十",
        general: {
            upright: "家族財務與傳承。富足的家族事業，長期的穩定。",
            reversed: "家族財務問題或繼承糾紛。"
        },
        topics: {
            love: { upright: "關係獲得家庭支持，考慮結婚或同居。", reversed: "家庭因素造成感情壓力。" },
            career: { upright: "在公司有穩定地位，或家族事業繼承。", reversed: "職場家族政治複雜。" },
            finance: { upright: "家族資產增加或房地產好消息。", reversed: "家族財務出現問題。" },
            health: { upright: "家庭支持系統健全。", reversed: "家族遺傳健康問題。" },
            decision: { upright: "這個決定影響深遠，涉及長期規劃。", reversed: "別只看眼前利益。" },
            daily: { upright: "今天適合與家人相處或處理家庭事務。", reversed: "家庭問題需要面對。" }
        }
    },
    {
        id: 74,
        name: "錢幣侍者",
        general: {
            upright: "學習與成長的學生。實用資訊或學習機會到來。",
            reversed: "對學習缺乏興趣或學習方向錯誤。"
        },
        topics: {
            love: { upright: "年輕的追求者或純真的情感表達。", reversed: "對感情太過天真。" },
            career: { upright: "新工作或實習機會，需要學習新技能。", reversed: "對工作內容不感興趣。" },
            finance: { upright: "收到零用錢或獎學金，或理財初學者。", reversed: "對金錢管理缺乏概念。" },
            health: { upright: "開始關注健康或學習新運動。", reversed: "三分鐘熱度。" },
            decision: { upright: "這個決定需要學習新知識。", reversed: "先充實自己再做決定。" },
            daily: { upright: "今天有學習新事物的機會。", reversed: "別太固執己見。" }
        }
    },
    {
        id: 75,
        name: "錢幣騎士",
        general: {
            upright: "穩健的執行者。腳踏實地，按部就班完成任務。",
            reversed: "太過固執或進展緩慢缺乏彈性。"
        },
        topics: {
            love: { upright: "穩定可靠的伴侶，雖然不浪漫但可靠。", reversed: "感情生活缺乏激情。" },
            career: { upright: "穩定執行任務的好員工。", reversed: "太過安逸不願改變。" },
            finance: { upright: "穩定的收入來源，保守理財。", reversed: "理財方式太過保守。" },
            health: { upright: "規律的生活作息。", reversed: "缺乏變化導致無聊。" },
            decision: { upright: "穩健的決定，適合長期執行。", reversed: "別太死板，要會變通。" },
            daily: { upright: "今天適合處理例行公事。", reversed: "生活太過一成不變。" }
        }
    },
    {
        id: 76,
        name: "錢幣王后",
        general: {
            upright: "富足與滋養的女性。務實、溫暖、物質與心靈兼顧。",
            reversed: "過度物質或對金錢過度焦慮。"
        },
        topics: {
            love: { upright: "温柔富足的伴侶，會照顧人。", reversed: "太過注重物質條件。" },
            career: { upright: "女性主管務實又有同理心。", reversed: "對下屬太過嚴格。" },
            finance: { upright: "理財有道，生活品質佳。", reversed: "對金錢太過計較。" },
            health: { upright: "注重飲食健康與生活品質。", reversed: "太過注重外在而忽略內在。" },
            decision: { upright: "這個決定兼顧現實與感受。", reversed: "別讓物質影響判斷。" },
            daily: { upright: "今天適合享受生活或照顧他人。", reversed: "別對自己太苛刻。" }
        }
    },
    {
        id: 77,
        name: "錢幣國王",
        general: {
            upright: "成功與富足的領導者。事業有成，財務穩健，權威與物質兼備。",
            reversed: "過度貪財或權威濫用，或失去掌控。"
        },
        topics: {
            love: { upright: "成熟穩重的伴侶，經濟基礎穩固。", reversed: "大男人主義或太重物質。" },
            career: { upright: "事業成功的老闆或管理者。", reversed: "老闆太過嚴厲或貪心。" },
            finance: { upright: "財務自由，投資有成。", reversed: "對金錢過度執著。" },
            health: { upright: "有資源和能力照顧健康。", reversed: "應酬過多影響健康。" },
            decision: { upright: "這是成功導向的決定。", reversed: "別只看重利益。" },
            daily: { upright: "今天適合處理重要公務或談生意。", reversed: "避免金錢上的貪念。" }
        }
    }
];