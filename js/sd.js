$(function(){

	// 質問リスト
	var questionList = [
		{ no: 1,  sno: 1, group: "a", gqno:15, content: "小さいミスや欠点が気になる" },
		{ no: 2,  sno: 2, group: "a", gqno:15, content: "冗談が簡単に言えない" },
		{ no: 3,  sno: 3, group: "a", gqno:15, content: "全てに正直でありたいと思ってしまう" },
		{ no: 4,  sno: 4, group: "a", gqno:15, content: "嘘やごまかしなど道に外れたことはしたくないと思ってしまう" },
		{ no: 5,  sno: 5, group: "a", gqno:15, content: "正しくあることが大事である" },
		{ no: 6,  sno: 6, group: "a", gqno:15, content: "することがたくさんあるのに、時間が足りずいつも焦っている" },
		{ no: 7,  sno: 7, group: "a", gqno:15, content: "自分の時間の使い方を細かく分析してしまう" },
		{ no: 8,  sno: 8, group: "a", gqno:15, content: "悪いことはどうしても許せないと思い込んでしまう" },
		{ no: 9,  sno: 9, group: "a", gqno:15, content: "物事が公正ではないと悩んでしまう" },
		{ no: 10, sno:10, group: "a", gqno:15, content: "常に向上心があり、もっと向上しなければ思っている" },
		{ no: 11, sno:11, group: "a", gqno:15, content: "しばしば欲求不満に駆られる" },
		{ no: 12, sno:12, group: "a", gqno:15, content: "正しいか誤っているか？良いか悪いか？で物事を判断してしまう" },
		{ no: 13, sno:13, group: "a", gqno:15, content: "時間の浪費をさけようと付き合いを断ったりする" },
		{ no: 14, sno:14, group: "a", gqno:15, content: "欠点をどうにか改めようと努力する" },
		{ no: 15, sno:15, group: "a", gqno:15, content: "何事もきちんとしていないとすぐにイライラしてしまう" },
		{ no: 16, sno: 1, group: "b", gqno:15, content: "周囲から頼られていると感じることがよくある" },
		{ no: 17, sno: 2, group: "b", gqno:15, content: "「他人から必要な存在でありたい」と思っている" },
		{ no: 18, sno: 3, group: "b", gqno:15, content: "親近感をもたれやすい" },
		{ no: 19, sno: 4, group: "b", gqno:15, content: "他人が困っていたり、苦しんでいると助けたくなる" },
		{ no: 20, sno: 5, group: "b", gqno:15, content: "他人が慰めと助言を自分に求めて欲しいと思っている" },
		{ no: 21, sno: 6, group: "b", gqno:15, content: "他人から頼られることを重荷に感じる時がある" },
		{ no: 22, sno: 7, group: "b", gqno:15, content: "基本的に自分自身のことは後回しである" },
		{ no: 23, sno: 8, group: "b", gqno:15, content: "いつも誰かと「近くにいる」ことを感じていたい" },
		{ no: 24, sno: 9, group: "b", gqno:15, content: "感謝されないと自分が犠牲者になったと感じる" },
		{ no: 25, sno:10, group: "b", gqno:15, content: "気持ちが通じ合うと喜びを感じる" },
		{ no: 26, sno:11, group: "b", gqno:15, content: "人に尽くすことによってその人にとって自分が大事な存在になりたいと思う" },
		{ no: 27, sno:12, group: "b", gqno:15, content: "自分の助言などで他人が成長してくれるのが嬉しい" },
		{ no: 28, sno:13, group: "b", gqno:15, content: "人が自分を気遣ってくれている以上に、他人を気遣っている" },
		{ no: 29, sno:14, group: "b", gqno:15, content: "周囲の反応に敏感である" },
		{ no: 30, sno:15, group: "b", gqno:15, content: "「愛し、愛される」ことが、人生で大切なことであると感じている" },
		{ no: 31, sno: 1, group: "c", gqno:15, content: "いつも何かしているのが好き" },
		{ no: 32, sno: 2, group: "c", gqno:15, content: "仕事は専門的でありたい" },
		{ no: 33, sno: 3, group: "c", gqno:15, content: "人と一緒に仕事をするのが好きで、良い仲間でありたいと感じている" },
		{ no: 34, sno: 4, group: "c", gqno:15, content: "物事を達成するには組織化して、無駄なく効率的にやるのがいいと思っている" },
		{ no: 35, sno: 5, group: "c", gqno:15, content: "自分は成功していると感じていたい" },
		{ no: 36, sno: 6, group: "c", gqno:15, content: "目標を明確に定め、その結果にむかって今自分がすべきことを知っている" },
		{ no: 37, sno: 7, group: "c", gqno:15, content: "自分がやり遂げた実績を数値にして示すのが好き" },
		{ no: 38, sno: 8, group: "c", gqno:15, content: "自分で決断することを好むが、臨機応変に意見を変えることができる" },
		{ no: 39, sno: 9, group: "c", gqno:15, content: "目標を達成することは、相手に合わせて妥協することも大切だと思っている" },
		{ no: 40, sno:10, group: "c", gqno:15, content: "過去の失敗や間違いより、やり遂げたことを感じたい" },
		{ no: 41, sno:11, group: "c", gqno:15, content: "自分のしていることを否定され「うまくいっていない」と言われることが嫌いだ" },
		{ no: 42, sno:12, group: "c", gqno:15, content: "何かを続けるより、どんどん新しいことに挑戦するのが好きだ" },
		{ no: 43, sno:13, group: "c", gqno:15, content: "周囲から説得力があると言われる" },
		{ no: 44, sno:14, group: "c", gqno:15, content: "物事を達成し、自己主張の強い人間だと思われている" },
		{ no: 45, sno:15, group: "c", gqno:15, content: "第一印象は大切である" },
		{ no: 46, sno: 1, group: "d", gqno:15, content: "自分の過去に哀愁を感じている" },
		{ no: 47, sno: 2, group: "d", gqno:15, content: "いつも自然に、ありのままに振る舞いたいができない" },
		{ no: 48, sno: 3, group: "d", gqno:15, content: "象徴的なものに惹かれやすい" },
		{ no: 49, sno: 4, group: "d", gqno:15, content: "自分の感じていることを他人に理解してもらえない" },
		{ no: 50, sno: 5, group: "d", gqno:15, content: "いつも礼儀正しく品位を保ちたい" },
		{ no: 51, sno: 6, group: "d", gqno:15, content: "周囲の雰囲気は大事である" },
		{ no: 52, sno: 7, group: "d", gqno:15, content: "人生は劇場で、舞台で演じているように感じている" },
		{ no: 53, sno: 8, group: "d", gqno:15, content: "マナーの良さ、良い趣味は自分に大切なものである" },
		{ no: 54, sno: 9, group: "d", gqno:15, content: "自分を平凡だと感じたくない" },
		{ no: 55, sno:10, group: "d", gqno:15, content: "失われたもの、死、苦しみを思うとつい思い沈んでしまう" },
		{ no: 56, sno:11, group: "d", gqno:15, content: "人間関係がうまくいかないことに人より困惑してしまう" },
		{ no: 57, sno:12, group: "d", gqno:15, content: "自分を悲劇のヒロインのように感じてしまうことがある" },
		{ no: 58, sno:13, group: "d", gqno:15, content: "感情の起伏が激しく、高ぶったり沈んだりするが、どっちつかづだと生き生きした感じがなくなってしまう" },
		{ no: 59, sno:14, group: "d", gqno:15, content: "芸術や美的表現は感情を表す手段として重要である" },
		{ no: 60, sno:15, group: "d", gqno:15, content: "周囲に芝居がかっていると言われる" },
		{ no: 61, sno: 1, group: "e", gqno:15, content: "感情を表すのが苦手だ" },
		{ no: 62, sno: 2, group: "e", gqno:15, content: "何ということもない会話をするのが苦手である" },
		{ no: 63, sno: 3, group: "e", gqno:15, content: "総合的にものを見たり、意見をまとめるのが得意" },
		{ no: 64, sno: 4, group: "e", gqno:15, content: "日常でプライベートな時間と場所があるとくつろげる" },
		{ no: 65, sno: 5, group: "e", gqno:15, content: "自分が率先するより、人に任せるタイプである" },
		{ no: 66, sno: 6, group: "e", gqno:15, content: "自分が関わる前に、他人がしていることを観察する傾向がある" },
		{ no: 67, sno: 7, group: "e", gqno:15, content: "一人でいるのが好きだ" },
		{ no: 68, sno: 8, group: "e", gqno:15, content: "物静かである" },
		{ no: 69, sno: 9, group: "e", gqno:15, content: "自分から頼みごとをするのは苦手だ" },
		{ no: 70, sno:10, group: "e", gqno:15, content: "問題が起きたら、自分で解決したい" },
		{ no: 71, sno:11, group: "e", gqno:15, content: "自己主張が苦手である" },
		{ no: 72, sno:12, group: "e", gqno:15, content: "考えることで問題解決をしようとする" },
		{ no: 73, sno:13, group: "e", gqno:15, content: "自分は時間やお金に関してケチだと思う" },
		{ no: 74, sno:14, group: "e", gqno:15, content: "「大きな声で話してほしい」と言われることがよくある" },
		{ no: 75, sno:15, group: "e", gqno:15, content: "情報を人に「与える」より「受け取る」ほうが多い" },
		{ no: 76, sno: 1, group: "f", gqno:15, content: "明確な指針を持ち、自分の立場を知っていたい" },
		{ no: 77, sno: 2, group: "f", gqno:15, content: "常に危険を警戒している" },
		{ no: 78, sno: 3, group: "f", gqno:15, content: "物事を全て真面目に考えすぎる" },
		{ no: 79, sno: 4, group: "f", gqno:15, content: "何か間違いがないかいつも自問している" },
		{ no: 80, sno: 5, group: "f", gqno:15, content: "批判を攻撃として感じてしまう" },
		{ no: 81, sno: 6, group: "f", gqno:15, content: "自分の仲間や配偶者が何を考えているか心配することが多い" },
		{ no: 82, sno: 7, group: "f", gqno:15, content: "身を粉にして働くことができる" },
		{ no: 83, sno: 8, group: "f", gqno:15, content: "周囲は自分を「思いやりがある」と見てくれる" },
		{ no: 84, sno: 9, group: "f", gqno:15, content: "優れたユーモアの感覚があると言われる" },
		{ no: 85, sno:10, group: "f", gqno:15, content: "親密な人との関係で弱い立場になれば一層怒りっぽくなる" },
		{ no: 86, sno:11, group: "f", gqno:15, content: "自分を誉めて操縦しようとする人はすぐに分かる" },
		{ no: 87, sno:12, group: "f", gqno:15, content: "予測できることが好きである" },
		{ no: 88, sno:13, group: "f", gqno:15, content: "自分で自分の成功を妨害してきた" },
		{ no: 89, sno:14, group: "f", gqno:15, content: "身綺麗にし、整頓しておくと自分の生活をコントロールできていると感じれる" },
		{ no: 90, sno:15, group: "f", gqno:15, content: "自惚れている人や野心的なタイプが好きでない" },
		{ no: 91, sno: 1, group: "g", gqno:15, content: "人を疑ったり、動機を探したりしない方だ" },
		{ no: 92, sno: 2, group: "g", gqno:15, content: "楽しいことが好きだ" },
		{ no: 93, sno: 3, group: "g", gqno:15, content: "物事はつも良い方向へ展開していく" },
		{ no: 94, sno: 4, group: "g", gqno:15, content: "他の人が私と同じように明るい気持ちでいればいいのにと思う" },
		{ no: 95, sno: 5, group: "g", gqno:15, content: "人生の暗い面には目を向けたくない" },
		{ no: 96, sno: 6, group: "g", gqno:15, content: "出会う人に敵意を感じることはほとんどない" },
		{ no: 97, sno: 7, group: "g", gqno:15, content: "ジョークや明るい話が大好きだ" },
		{ no: 98, sno: 8, group: "g", gqno:15, content: "自分は陽気で子供っぽい人間だと思う" },
		{ no: 99, sno: 9, group: "g", gqno:15, content: "パーティーなどで目立ちたがり屋である" },
		{ no: 100,sno:10, group: "g", gqno:15, content: "物事は広い視野で捉えるべきだと思う" },
		{ no: 101,sno:11, group: "g", gqno:15, content: "「よいもの」は「もっとよく」と強く思う" },
		{ no: 102,sno:12, group: "g", gqno:15, content: "苦労の生み出す「味わいのある人生」より、「楽しさいっぽいの人生」がいい" },
		{ no: 103,sno:13, group: "g", gqno:15, content: "人を喜ばせることが好き" },
		{ no: 104,sno:14, group: "g", gqno:15, content: "嫌なことはできるだけ避けたい" },
		{ no: 105,sno:15, group: "g", gqno:15, content: "ひとつのことに集中するより、関心がどんどん移っていくタイプだ" },
		{ no: 106,sno: 1, group: "h", gqno:15, content: "自分が必要とするもののために戦い、守りぬく" },
		{ no: 107,sno: 2, group: "h", gqno:15, content: "他人の弱点をすぐに見つけ、相手が挑戦してきたらすぐに弱点を攻撃する" },
		{ no: 108,sno: 3, group: "h", gqno:15, content: "他人と対決することを恐れない" },
		{ no: 109,sno: 4, group: "h", gqno:15, content: "グループで権力をもっているのが誰かすぐに分かる" },
		{ no: 110,sno: 5, group: "h", gqno:15, content: "自己主張が強い人間である" },
		{ no: 111,sno: 6, group: "h", gqno:15, content: "動いているのが好きだ" },
		{ no: 112,sno: 7, group: "h", gqno:15, content: "仁義と筋を通すのは大事である" },
		{ no: 113,sno: 8, group: "h", gqno:15, content: "権威や権限の下にあるものをかばう傾向がある" },
		{ no: 114,sno: 9, group: "h", gqno:15, content: "自分は「素朴」な人間である" },
		{ no: 115,sno:10, group: "h", gqno:15, content: "自己反省や自己分析には興味が無い" },
		{ no: 116,sno:11, group: "h", gqno:15, content: "順応しにくい人間である" },
		{ no: 117,sno:12, group: "h", gqno:15, content: "余計な世話をやかれるのが嫌いだ" },
		{ no: 118,sno:13, group: "h", gqno:15, content: "自分は働きものである" },
		{ no: 119,sno:14, group: "h", gqno:15, content: "物事を成り行きに任せることに抵抗がある" },
		{ no: 120,sno:15, group: "h", gqno:15, content: "他人の意見で自分を正すのは納得がいかない" },
		{ no: 121,sno: 1, group: "i", gqno:15, content: "多くの人は物事に力を使いすぎている" },
		{ no: 122,sno: 2, group: "i", gqno:15, content: "平穏平静な人間である" },
		{ no: 123,sno: 3, group: "i", gqno:15, content: "なにもしていない時が好きだ" },
		{ no: 124,sno: 4, group: "i", gqno:15, content: "のんきな性格である" },
		{ no: 125,sno: 5, group: "i", gqno:15, content: "前に眠れなかった夜がいつか思い出せない" },
		{ no: 126,sno: 6, group: "i", gqno:15, content: "ほとんどの人に差はあまりないと思う" },
		{ no: 127,sno: 7, group: "i", gqno:15, content: "物事で興奮することはほとんどない" },
		{ no: 128,sno: 8, group: "i", gqno:15, content: "何かを始めるのは外部からの刺激がないと行動できない" },
		{ no: 129,sno: 9, group: "i", gqno:15, content: "力を浪費するのが嫌いで、常に力の節約を考えている" },
		{ no: 130,sno:10, group: "i", gqno:15, content: "中途半端で落ち着かないことが好きでない" },
		{ no: 131,sno:11, group: "i", gqno:15, content: "自分が安定した人間であると誇りを持っている" },
		{ no: 132,sno:12, group: "i", gqno:15, content: "人々を落ち着かせるために相手に合わせて行動する傾向がある" },
		{ no: 133,sno:13, group: "i", gqno:15, content: "自分を重要な人間だと考えていない" },
		{ no: 134,sno:14, group: "i", gqno:15, content: "人の話を聞くのが苦手だ" },
		{ no: 135,sno:15, group: "i", gqno:15, content: "「座れるのになぜ立つのか」という考え方に賛成である" },
		{ no: 136,sno: 1, group: "j", gqno: 5, content: "ローリスク・ローリターンよりもハイリスク・ハイリターンの方が性に合っている" },
		{ no: 137,sno: 2, group: "j", gqno: 5, content: "90%の確率で手に入る毎月10万円の案件と、20%の確率で手に入る毎月100万円の案件があれば、後者の方がやりたい" },
		{ no: 138,sno: 3, group: "j", gqno: 5, content: "ギャンブルが好きだ" },
		{ no: 139,sno: 4, group: "j", gqno: 5, content: "ビジネスにリスクが伴うのは当たり前だと思っている" },
		{ no: 140,sno: 5, group: "j", gqno: 5, content: "いつかは年収1億円になりたいと考えている" },
		{ no: 141,sno: 1, group: "k", gqno: 5, content: "ビジネスにかけられるお金は無いが、時間ならたくさんある" },
		{ no: 142,sno: 2, group: "k", gqno: 5, content: "ビジネスの立ち上げが1ヶ月遅れたとしても、初期投資は0円にしたい" },
		{ no: 143,sno: 3, group: "k", gqno: 5, content: "毎日3時間以上、ビジネスに時間を使える" },
		{ no: 144,sno: 4, group: "k", gqno: 5, content: "時間をかけて必ず成果が出るなら、いくらでも時間をかける" },
		{ no: 145,sno: 5, group: "k", gqno: 5, content: "時間をお金で買う考え方はあまり好きではない" },
		{ no: 146,sno: 1, group: "l", gqno: 5, content: "算数よりも国語の方が得意だ" },
		{ no: 147,sno: 2, group: "l", gqno: 5, content: "文章を書くのが好きだ" },
		{ no: 148,sno: 3, group: "l", gqno: 5, content: "セールスコピーライティングを勉強した事がある" },
		{ no: 149,sno: 4, group: "l", gqno: 5, content: "ブログや日記を書いている" },
		{ no: 150,sno: 5, group: "l", gqno: 5, content: "数字には強くない" },
		{ no: 151,sno: 1, group: "m", gqno: 5, content: "営業経験がある" },
		{ no: 152,sno: 2, group: "m", gqno: 5, content: "LINEのメッセージで商品を売る自信がある" },
		{ no: 153,sno: 3, group: "m", gqno: 5, content: "人と話すのが好きだ" },
		{ no: 154,sno: 4, group: "m", gqno: 5, content: "１人でコツコツと仕組みを作ることは苦手だ" },
		{ no: 155,sno: 5, group: "m", gqno: 5, content: "調べ物をすることが苦手だ" }
	];

	var characterList = {
		a: {
			character: "完璧主義", 
			temper: "完璧を求め、何事にも向上心を持って行い、正確に遂行する", 
			strength: "責任感、真面目、努力家、平等、正義感", 
			weakness: "批判的、融通が利かない、心配性、強い不信感", 
			detail: "あなたは完璧を求めて、何事にも向上心を持ち正確に仕事をこなしていく【完璧主義】タイプです。<br/><br/>その真面目さと正確に実行をする点からどのビジネスモデルのノウハウを実践しても結果を出すことができるでしょう。<br/><br/>仕事においては依頼されたことを最後まで実践をする責任感があるので、周りから信頼はされますが、１度にたくさん頼まれるとどれも終わらなくなるという、融通が利かない点もあります。<br/><br/>ただネットビジネスでは１度に多くのことをやるよりも、１つのことに集中して作業を行った方が最短で結果が出ますし、絞った方がスキルも磨かれ、より大きな結果を残すことが出来ます。<br/><br/>あなたは常に高みを目指して、毎日のようにコツコツ作業ができるので、ネットビジネスにはとても向いているでしょう。<br/><br/>しかし、自分が業務に対し完璧を求めるあまり、他人にも完璧を求めてしまうので、他人に依頼をする時に「ちゃんとできるかな」と強い不信感を抱いてしまうこともあるでしょう。<br/><br/>仕事も細部まで準備し、どんなに小さなミスでも見逃さずチェックし、抜かりなく行うので、独立してビジネスに取り組んでも高い成果が得られるでしょう。"
		},
		b: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: "あなたは利己心がなく誰に対しても公平に接することができる【利他主義】タイプです。<br/><br/>感受性に優れ、相手のことを思いやる気持ちが強いあなたは、人に対して親切で気配りができるしっかり者ですので組織をまとめるリーダー的な存在です。<br/><br/>思考に柔軟性があり、相手の求めていることを察する能力の高いあなたは文章を書いたり、新しいサービスを考えたりするといいでしょう。また組織をまとめるようなリーダー的な役割も適任です。<br/><br/>この自分よりも相手の成功を第一に考えてしまう気質のタイプは、与えた恩の見返りや感謝を強く求めすぎる傾向もありますので、その点はご注意を。また、人に対してNOと言えず、自己評価が低くなりがちですので、なるべく自分を客観的に冷静に見つめるようにしましょう。<br/><br/>しかし、期待されればされるほど、それに応えようとする性格は、ビジネスにおいては大きな強みになります。サービス業だったり、人に教えることが得意なあなたにとって、インターネットはまさにレバレッジの宝庫です。<br/><br/>さらに組織をまとめるリーダーにも向いていますので、副業ではじめたビジネスが想像以上に大きくなるポテンシャルも秘めています。"
		},
		c: {
			character: "野心家", 
			temper: "成功を求め、達成し、臨機応変・効率的に何事にも取り組む", 
			strength: "成功志向、目標達成、能率、自信、行動力", 
			weakness: "自己演出、自己欺瞞、うぬぼれ、責任転嫁", 
			detail: "あなたは成功を求め、その目標達成に向けしっかりと計画を立て効率的に取り組むことができる行動力のある【野心家】タイプです。<br/><br/>あなたはどのビジネスモデルを実践してもきちんと結果を出すまでの計画を立てて効率的に作業を行うので最短で結果を出すことができるでしょう。<br/><br/>特に数字などで結果を見れた方が現状の改善や、新しいビジネスでの参考材料になると考えるので、結果が数字で見れるものや即日に結果がわかるビジネスを行うと良いでしょう。<br/><br/>自分が成功をすることを第一に考えてしまうので周りの事を考えず、無意識に蹴落として成功しようとする傾向にあるので、「信用できない」「性格が悪い」などと誤解を受けてしまう可能性もあります。<br/><br/>ネットではクラウドソーシングという簡単に外注に依頼ができるサービスもあるので、あなたのようなタイプは手が足りない部分は外注に依頼をする形の方が良いかもしれません。<br/><br/>何事も目標を設定し、達成するまでに効率的で臨機応変に対応し、失敗をしても切り返しが早いので、副業でも最速で結果を出すことができるでしょう。"
		},
		d: {
			character: "芸術家", 
			temper: "独創的で自分の価値観や美意識に基づき行動する", 
			strength: "創造性、感受性、美意識、独自性、想像力", 
			weakness: "主観的、嫉妬、自尊心が低い、うつ状態", 
			detail: "あなたは他の人が思いつかないような独創的なアイディアで現状の解決作や新企画を立ち上げる事に秀でているクリエイティブ思考の”芸術家”タイプ。<br/><br/>基本的には毎日コツコツ作業をするビジネスモデルは向いていないので単発で収入を得られるビジネスモデルの方があなたには合っているでしょう。<br/><br/>他者とは違う視点で物事を捉えていることが多いので意見を求められた時は、躊躇せずにいうことによって思わぬ解決策が見つかるかもしれません。<br/><br/>常に物事の考え方が主観的になりがちで視野が狭くなることがあるので、周りの人への好き嫌いが激しく協調性がない人物だと思われるかもしれません。<br/><br/>さらに結果を出している人に嫉妬をしてしまいその影響で気分が下がり仕事中のパフォーマンスが落ちることもあるでしょう。<br/><br/>他人は他人で考えて、あなたの思うようにビジネスを行っていけばビジネスでは大きな結果を得ることができるでしょう。<br/><br/>新しい経験に対して好奇心が強いため、副業も意欲的に取り組むことができ、成長も早いでしょう。"
		},
		e: {
			character: "哲学者", 
			temper: "知識を求め、観察し、冷静に判断・思考する", 
			strength: "知的好奇心、分析力、博識、節制、研究", 
			weakness: "空虚さ、消極的、頑固、他者への共感の欠如", 
			detail: "あなたは常に新しい知識を求めて研究を行い物事を冷静に分析し判断・思考ができる”哲学者”タイプです。<br/><br/>分析をしたりデータを取ることが得意なあなたは１つのビジネスモデルでも２パターンのやり方を試して結果がいい方を続けていくという、賢いやり方で結果を出すことができるでしょう。<br/><br/>研究熱心なあなたは、どうすればこの売り上げを伸ばせるか？を分析して考えるので現状のままで満足をせずに常に高みを目指す向上心もあります。<br/><br/>一度自分で気になったことは徹底的に調べるのでその道のプロフェッショナルになれるタイプです。<br/><br/>ただ人付き合いが得意でないために、チームで１つの仕事をしたり大勢でプロジェクトを行うのは少し苦労をしそうです。<br/><br/>ネットビジネスは無理に人と行わなくてもある程度のレベルなら１人でも出来ますしもし人手が足りなければ外注に依頼をすれば大丈夫です。<br/><br/>新しい知識の吸収に貪欲なため、正しい知識を得て、情報を分析しながら 無駄なく副業を行うことができるタイプでしょう。"
		},
		f: {
			character: "信仰家", 
			temper: "安全を求め忠実であり、責任を果たす", 
			strength: "規則、誠実、忠実、責任感、義務感", 
			weakness: "疑心暗鬼、権力への依存、先送り癖、被害妄想", 
			detail: "あなたは安全を求めて、自分が認める人に対して忠実であり与えられた仕事は最後までおこなう責任感もある”信仰家”タイプです。<br/><br/>その性格からネットビジネスではリスクを取って一攫千金よりもコツコツ作業を行っていき小さくとも確実に結果が出るようなものを行うほうが無理なく稼ぎ続けることができるでしょう。<br/><br/>あなたは他人に依存をしすぎて自分の意見がブレてしまうので大事な時に決断力にかけてしまいます。<br/><br/>昇格のチャンスや大事な場面で、優柔不断な性格のせいでチャンスを掴めずに後悔をした経験も、過去にいくつかあるはずです。<br/><br/>しかし認める人に忠実なあなたは、言われたことはやり切る責任感の強さがあるので指導者を見つけて徹底的に教えて貰えば、必ず効果を出すことができるので自分で調べようとせず、指導者を見つけた方が最短で結果を出せるでしょう。<br/><br/>信念に基づき行動し、自らの責任を果たそうとするので、副業でも心強い指導者がいれば加速度的に成果を出すことでしょう。"
		},
		g: {
			character: "情熱家",
			temper: "活発で行動派、創造力にあふれ楽しみを発見する",
			strength: "情熱的、好奇心旺盛、柔軟性、プラス思考、純粋",
			weakness: "落ち着きがない、注意力散漫、飽きっぽい、無責任情熱的、好奇心旺盛、柔軟性、プラス思考、純粋",
			detail: "あなたは活発で新しいことにもドンドン挑戦をしていく行動力と、柔軟な発想でアイディアマンとしても力を発揮する”情熱家”タイプです。<br/><br/>行動力があるのでどのビジネスモデルをやるか悩むよりも１つ決めてすぐ初めてしまう方がより早く結果を出すことができるでしょう。<br/><br/>好奇心が旺盛なのでつい、いろいろなノウハウに手を出してしまうこともありどれも中途半端になり、結果を出すのに時間がかかるでしょう。<br/><br/>少し我慢をしてでも１つのノウハウで結果を出せば後は持ち前の柔軟な思考で収入を増やしていくこともできるでしょう。<br/><br/>プラス思考のあなたは失敗をしても、成長のための経験と考えすぐに次のことを始められるので、流れの速いネット業界でも柔軟に対応できます。<br/><br/>あなたは、たとえ金銭的利益につながらなくても楽しみや情熱を見いだせれば見返りを求めず行動するのでネットビジネスでも長期的に稼ぐことが出来るでしょう。"
		},
		h: {
			character: "開拓者", 
			temper: "挑戦的でエネルギッシュ、天性のカリスマで人を惹きつける", 
			strength: "挑戦、決断力、実行力、義理深い、リーダーシップ", 
			weakness: "威圧的、独裁的、我が強い、欲求不満", 
			detail: "あなたは新しいことにもドンドン挑戦していけるタイプでその決断力と実行力から周りの人間を引きつけ、リーダー性もある”開拓者”タイプです。<br/><br/>責任感の強さと最後までやり切る行動力があるので、ネットビジネスを教えている塾に入るか合宿などに参加をしてスタートダッシュを切れれば長期的に結果を出し続けることができるでしょう。<br/><br/>さらにリーダー性にも長けているので、周りの人間を巻き込みそこでビジネスを行うことで、さらに大きな収入を得ることができるでしょう。<br/><br/>ただ自分の考えが正しいという意識が強いために他人のアドバイスや意見を取り入れることを拒んでしまうので間違った方向に進み、取り返しのつかないことになった経験もあるはずです。<br/><br/>さらに自分の意見を押し通そうとして相手に対して威圧的になってしまい、周りから距離を置かれて気付けば孤独になっていることもしばしばあるでしょう。<br/><br/>ただ、即断即決の決断力があるので、ネットビジネスでもたとえ大きな難題が立ち向かっても自分の力で解決し大きな成果を生むことができるでしょう。"
		},
		i: {
			character: "平和主義", 
			temper: "平穏を好み、調和と友好を尊重し、忍耐強く動じない", 
			strength: "平和、安らぎ、忍耐強い、協調、瞬発力", 
			weakness: "無関心、怠惰、ことなかれ主義、優柔不断", 
			detail: "あなたは他者との争い競争を好まず、調和を優先する人で物事に対して行動的ではないですが一度動き出すと粘りつよく最後までやり切ることができる忍耐強さを持ち合わせる”平和主義”タイプです。<br/><br/>ネットビジネスでは一度動けば集中し最後までやり切ることができるのですが動き出すまでに時間がかかるので、友人や上司などに無理矢理でも引っ張ってもらい始めることをオススメします。<br/><br/>争いや競争を好まないので、自分の意見を表に出すことなく周りの意見に同調をするので問題を先伸ばしにしてしまい、かかえている問題がさらに深刻になることもあるでしょう。<br/><br/>優柔不断で自分に自信がない一面もあるので新しいことには挑戦せず現状維持を意識して行動をしていきます。<br/><br/>なので常に新しいことに意欲的で、自己成長を求める行動的な人物とは意見が合わずに衝突をしてしまうこともあるでしょう。<br/><br/>ただビジネスを始めるうえで指導者を見つける時は、このような行動的な人物の方が自分もより早く結果を出せるので、初めの１万、２万といった売り上げでも出す為には少し我慢しても付いて行った方がいいでしょう。<br/><br/>ただ、偏見がなく総合的な視点から見ることができることや、持ち前の忍耐力と集中した時の爆発的な行動力で、困難な課題を乗り越えてしまうことができるでしょう。"
		}
	};

	var btList = [
		{ 
			bName: "サイトSEOアフィリエイト", 
			detail: "wordpressなどのCMSを使いWEBサイトを作り、狙ったキーワードで検索エンジンに上位表示させてアフィリエイトをする。" + 
				"利用するASPはA8netやアフィリエイトBなど。領域は金融・美容・転職・健康食品がオススメ。" + 
				"このビジネスは成果が出るまで時間とお金がかかるが、うまくいったときのリターンは大きい。月1000万円を超える収益をあげる強者も多くいるビジネスモデル。"
		},
		{ 
			bName: "PPCアフィリエイト", 
			detail: "アフィリエイトの案件を並べたランディングページを作成して、そのページにAdwordとYahooリスティングで広告を出稿して、アフィリエイト報酬を稼ぐ。" + 
				"ランディングページのクオリティと広告運用の精度が求められる。" + 
				"最初は赤字になる事が多く、根気強く改善を進める事で収益が出始める。" + 
				"ビジネスの規模が拡大すると月1000万円以上の収益を出す事も可能になるビジネスモデル。"
		},
		{ 
			bName: "FB広告アフィリエイト", 
			detail: "アフィリエイトの案件を並べたランディングページを作成して、そのページにFacebook広告を出稿して、アフィリエイト報酬を稼ぐ。" + 
				"ランディングページのクオリティと広告運用の精度が求められる。最初は赤字になる事が多く、根気強く改善を進める事で収益が出始める。" + 
				"Facebook広告は人の心を掴むセンスが要求される。"
		},
		{ 
			bName: "FBページアフィリエイト", 
			detail: "Facebookページのファンを増やし、そのファンに対して時々アフィリエイトリンクを流して、アフィリエイト報酬を稼ぐモデル。" + 
				"Facebookページのファンを増やすためにユーザーに求められているコンテンツを出していく。時間が多くかかるが、コツコツやればその分の収益は稼ぎやすい。" + 
				"月10万円〜月300万円の収入を目指すモデル。"
		},
		{ 
			bName: "メッセージアフィリエイト", 
			detail: "Facebook,LINE,アメブロなどで友達を増やし、その友達に対してメッセージでアフィリエイトリンクを流しアフィリエイト報酬を得ていくモデル。" + 
				"実名で友達を増やしていく事が出来ない人は、架空の人物（キャラ）を作成しそのキャラで友達を増やしていく。" + 
				"男性が女性のキャラを作りネット上で活動する事を「ネカマ」という。" + 
				"労働集約型になりがちのため、大きな収益を出す事は難しいが、コツコツとコミュニケーションを取れば月5万円〜月30万円の収益が確実に出るモデル。"
		},
		{ 
			bName: "ブログアフィリエイト", 
			detail: "ブログを作成し、そのブログ内でアフィリエイトをするモデル。ブログへの収益はSEO対策がメインとなるが、ブログ内でアメブロのペタや読者登録など、" + 
				"ブログの機能を用いて集客をすることもある。コツコツと運営をしていく事で、収益は少しづつ増えていく。"
		},
		{ 
			bName: "メルマガアフィリエイト", 
			detail: "メルマガを発行し、読者を集めて、読者に対してアフィリエイトリンクを流しアフィリエイト報酬を得るモデル。メルマガ配信スタンドと契約して、メルマガを配信する事が多い。" +
				"読者を集客する仕組み、読者を飽きさせない仕組み、読者をマネタイズするアフィリエイトの仕組みの3つを構築する。月10万円〜月300万円の収益を目指せる。"
		},
		{ 
			bName: "LINE@ アフィリエイト", 
			detail: "LINE@の読者を集めて、LINE@でアフィリエイトをする。LINE@の規約では、LINE@を広告媒体として使ってはいけないと書いてあるので利用には工夫が必要。LINE@はまだまだ使い切れていない人が多いため、今のうちから手を出しておくと良い事が多いかも。月10万円〜月100万円程度の収益が見込めます。"
		},
		{ 
			bName: "Twitterアフィリエイト", 
			detail: "Twitterのフォロワーを集めて、そのフォロワーにアフィリエイトリンクを流してアフィリエイト報酬を得るモデル。読者に喜ばれるツイートをしていくことで、フォロワーを増やしていく。収入を毎月100万円以上得ようと思うと、仕組み化が大事になる。月10万円〜500万円程度の収益を狙えるモデル。"
		},
		{ 
			bName: "副業メルマガ無料オプトインアフィリエイト", 
			detail: "副業関係のメルマガを発行し、副業関係の無料オプトインのアフィリエイトをするモデルです。無料オプトインというのは、メールアドレスの無料登録をしてもらう案件のことです。初心者にとって稼ぎやすいモデルです。読者の集め方は、オプトインページを作って広告を出して集める事が多いです。月10万円〜月500万円程度の収益を出す事が可能。"
		},
		{ 
			bName: "副業メルマガ有料商材アフィリエイト", 
			detail: "副業関係のメルマガを発行し、副業関係の有料商材をアフィリエイトするモデルです。アフィリエイトASPはinfotopを利用する事が多いです。無料オプトイン案件と違って、読者と強い信頼関係を作らなければ商品が売れないため、中級・上級モデルといえます。月50万円〜1000万円の収益が見込めます。"
		},
		{ 
			bName: "クラウドソージング受託", 
			detail: "ランサーズやクラウドワークスといったクラウドソージングを受託できるプラットフォームを利用し、仕事を受けます。仕事内容は様々で、データの書き起こしや事務作業といった誰でもできる仕事から、デザインやプログラミングなどの専門的な仕事もあります。受託の仕事のため確実に収益を得る事ができます。ただし、労働集約型なので大きなリターンは見込めません。ネットビジネスの初期投資を得るためのモデルと考えると良いでしょう。"
		},
		{ 
			bName: "ポイントサイト攻略", 
			detail: "ポイントサイトに登録してポイントを集め現金化します。ポイントサイトはゲットマネーやげん玉があります。ポイントを集めるための手法が労働集約型になりやすいため、大きなリターンを得る事はできませんが、しっかりと時間を使えば確実に稼ぐ事はできます。"
		},
		{ 
			bName: "店舗仕入の国内販売 転売", 
			detail: "店舗から仕入れて、国内のインターネットで販売をするモデル。店舗は家電であればYAMADA電気やビックカメラなどの家電量販店、本であればBooboffなどの中古販売店を使う事が多い。購入する際に、購入する値段よりも高い値段で売れるかどうかを調べてから購入する。販売する時は、Amazonやヤフオクに出品して販売する。販売よりも仕入れの方が重要になる事がおおい。初心者でもやり方を覚えれば、ほぼ確実に稼ぐ事ができる。月10万円〜月500万円ぐらいの収入を目指せる。"
		},
		{ 
			bName: "店舗仕入の海外販売 転売", 
			detail: "店舗から仕入れて、海外のインターネットで販売をするモデル。店舗は家電であればYAMADA電気やビックカメラなどの家電量販店、本であればBooboffなどの中古販売店を使う事が多い、海外で人気のアニメやマンガなどの日本文化を仕入れて販売する業者もいる。購入する際に、購入する値段よりも高い値段で売れるかどうかを調べてから購入する。販売する時は、海外のAmazonやebayで販売する。海外で販売というのはハードルが高そうに思えるが、やり方を覚えれば難しくない。月10万円〜月500万円ぐらいの収入を目指せる。"
		},
		{ 
			bName: "ネット仕入の国内販売 転売", 
			detail: "楽天、amazon、ebay,ヤフオク,などなどから仕入れて、国内のインターネットで販売するモデル。インターネットから仕入れてインターネットで販売をして本当に利益が出るのと不思議に思うかもしれないが、インターネット上にも価格差は存在するため利益を出す事ができる。"
		},
		{ 
			bName: "ネット仕入の海外販売 転売", 
			detail: "楽天、amazon、ebay,ヤフオク,などなどから仕入れて、海外のインターネットで販売するモデル。インターネットから仕入れてインターネットで販売をして本当に利益が出るのと不思議に思うかもしれないが、インターネット上にも価格差は存在するため利益を出す事ができる。海外で販売することにハードルが高いと感じるが、やり方さえ覚えてしまえば難しくない。"
		},
		{ 
			bName: "情報商材販売", 
			detail: "自分の知識や経験をPDFや動画にまとめて、電子書籍として販売するモデル。領域は、副業・モテる方法・ダイエット・投資などが多いが、ニッチな領域で販売する人も多い。販売方法は、メルマガ読者を集めて、メールで教育をしてから販売をするモデルが主流。商品作り・マーケティング・セールスと全ての準備が必要なため収益がでるまでに時間がかかる。しかし、うまくいったときの爆発力は大きい。月1000万円以上ぐらいの収入を狙う事ができる。"
		},
		{ 
			bName: "キュレーションメディア運営", 
			detail: "まとめ記事を作成して、アクセスを集めて広告収入を得るモデル。記事の作成はクラウドソージングで外注をする事が多い。1記事あたりの収益はそこまで多くないため、たくさんの記事を作る必要があり、その仕組み化が必要。広告収入はアドセンスやアイモバイルのアドネットワークを用いる事が多い。収益化するまで時間がかかるため根気づよく作っていく必要がある。"
		},
	];

	var rules = {
		"aYYYY":{character: characterList.a, businessType: [btList[1], btList[17],btList[0]]},
		"bYYYY":{character: characterList.b, businessType: [btList[17],btList[18],btList[2]]} ,
		"cYYYY":{character: characterList.c, businessType: [btList[9], btList[17],btList[1]]} ,
		"dYYYY":{character: characterList.d, businessType: [btList[2], btList[18],btList[9]]} ,
		"eYYYY":{character: characterList.e, businessType: [btList[10],btList[0], btList[17]]} ,
		"fYYYY":{character: characterList.f, businessType: [btList[1], btList[17],btList[10]]} ,
		"gYYYY":{character: characterList.g, businessType: [btList[10],btList[2], btList[18]]} ,
		"hYYYY":{character: characterList.h, businessType: [btList[17],btList[9], btList[2]]} ,
		"iYYYY":{character: characterList.i, businessType: [btList[0], btList[10],btList[18]]} ,
		"aYYYN":{character: characterList.a, businessType: [btList[1], btList[17],btList[0]]},
		"bYYYN":{character: characterList.b, businessType: [btList[17],btList[18],btList[3]]} ,
		"cYYYN":{character: characterList.c, businessType: [btList[9], btList[17],btList[1]]} ,
		"dYYYN":{character: characterList.d, businessType: [btList[3], btList[18],btList[0]]} ,
		"eYYYN":{character: characterList.e, businessType: [btList[10],btList[0], btList[17]]} ,
		"fYYYN":{character: characterList.f, businessType: [btList[1], btList[17],btList[10]]} ,
		"gYYYN":{character: characterList.g, businessType: [btList[10],btList[3], btList[18]]} ,
		"hYYYN":{character: characterList.h, businessType: [btList[17],btList[9], btList[3]]} ,
		"iYYYN":{character: characterList.i, businessType: [btList[0], btList[10],btList[18]]} ,
		"aYYNY":{character: characterList.a, businessType: [btList[6], btList[14],btList[16]]} ,
		"bYYNY":{character: characterList.b, businessType: [btList[13],btList[4], btList[6]]} ,
		"cYYNY":{character: characterList.c, businessType: [btList[16],btList[14],btList[8]]} ,
		"dYYNY":{character: characterList.d, businessType: [btList[15],btList[8], btList[4]]},
		"eYYNY":{character: characterList.e, businessType: [btList[6], btList[15],btList[8]]},
		"fYYNY":{character: characterList.f, businessType: [btList[13],btList[4], btList[9]]},
		"gYYNY":{character: characterList.g, businessType: [btList[14],btList[9], btList[7]]} ,
		"hYYNY":{character: characterList.h, businessType: [btList[7], btList[13],btList[9]]} ,
		"iYYNY":{character: characterList.i, businessType: [btList[6], btList[13],btList[8]]} ,
		"aYYNN":{character: characterList.a, businessType: [btList[6], btList[14],btList[16]]} ,
		"bYYNN":{character: characterList.b, businessType: [btList[13],btList[4], btList[6]]} ,
		"cYYNN":{character: characterList.c, businessType: [btList[16],btList[14],btList[8]]} ,
		"dYYNN":{character: characterList.d, businessType: [btList[15],btList[18],btList[4]]} ,
		"eYYNN":{character: characterList.e, businessType: [btList[6], btList[15],btList[8]]},
		"fYYNN":{character: characterList.f, businessType: [btList[13],btList[4], btList[9]]},
		"gYYNN":{character: characterList.g, businessType: [btList[14],btList[9], btList[7]]} ,
		"hYYNN":{character: characterList.h, businessType: [btList[7], btList[13],btList[9]]} ,
		"iYYNN":{character: characterList.i, businessType: [btList[6], btList[13],btList[8]]} ,
		"aYNYY":{character: characterList.a, businessType: [btList[1], btList[17],btList[0]]} ,
		"bYNYY":{character: characterList.b, businessType: [btList[17],btList[6], btList[2]]} ,
		"cYNYY":{character: characterList.c, businessType: [btList[9], btList[17],btList[1]]} ,
		"dYNYY":{character: characterList.d, businessType: [btList[2], btList[6], btList[13]]} ,
		"eYNYY":{character: characterList.e, businessType: [btList[10],btList[0], btList[17]]} ,
		"fYNYY":{character: characterList.f, businessType: [btList[1], btList[17],btList[10]]} ,
		"gYNYY":{character: characterList.g, businessType: [btList[10],btList[2], btList[6]]} ,
		"hYNYY":{character: characterList.h, businessType: [btList[17],btList[9], btList[2]]} ,
		"iYNYY":{character: characterList.i, businessType: [btList[0], btList[10],btList[6]]} ,
		"aYNYN":{character: characterList.a, businessType: [btList[1], btList[17],btList[0]]} ,
		"bYNYN":{character: characterList.b, businessType: [btList[17],btList[6], btList[7]]} ,
		"cYNYN":{character: characterList.c, businessType: [btList[9], btList[17],btList[1]]} ,
		"dYNYN":{character: characterList.d, businessType: [btList[2], btList[6], btList[8]]} ,
		"eYNYN":{character: characterList.e, businessType: [btList[10],btList[0], btList[17]]} ,
		"fYNYN":{character: characterList.f, businessType: [btList[1], btList[17],btList[10]]} ,
		"gYNYN":{character: characterList.g, businessType: [btList[10],btList[8], btList[6]]} ,
		"hYNYN":{character: characterList.h, businessType: [btList[17],btList[9], btList[7]]} ,
		"iYNYN":{character: characterList.i, businessType: [btList[0], btList[10],btList[6]]} ,
		"aYNNY":{character: characterList.a, businessType: [btList[1], btList[15],btList[7]]} ,
		"bYNNY":{character: characterList.b, businessType: [btList[7], btList[13],btList[2]]} ,
		"cYNNY":{character: characterList.c, businessType: [btList[0], btList[16],btList[8]]} ,
		"dYNNY":{character: characterList.d, businessType: [btList[1], btList[14],btList[7]]} ,
		"eYNNY":{character: characterList.e, businessType: [btList[15],btList[0], btList[9]]} ,
		"fYNNY":{character: characterList.f, businessType: [btList[14],btList[0], btList[7]]},
		"gYNNY":{character: characterList.g, businessType: [btList[7], btList[14],btList[1]]} ,
		"hYNNY":{character: characterList.h, businessType: [btList[16],btList[7], btList[1]]} ,
		"iYNNY":{character: characterList.i, businessType: [btList[14],btList[7], btList[0]]},
		"aYNNN":{character: characterList.a, businessType: [btList[1], btList[15],btList[7]]} ,
		"bYNNN":{character: characterList.b, businessType: [btList[7], btList[13],btList[2]]} ,
		"cYNNN":{character: characterList.c, businessType: [btList[0], btList[16],btList[8]]} ,
		"dYNNN":{character: characterList.d, businessType: [btList[1], btList[14],btList[7]]} ,
		"eYNNN":{character: characterList.e, businessType: [btList[15],btList[0], btList[9]]} ,
		"fYNNN":{character: characterList.f, businessType: [btList[14],btList[0], btList[7]]},
		"gYNNN":{character: characterList.g, businessType: [btList[7], btList[14],btList[1]]} ,
		"hYNNN":{character: characterList.h, businessType: [btList[16],btList[7], btList[1]]} ,
		"iYNNN":{character: characterList.i, businessType: [btList[14],btList[7], btList[0]]} ,
		"aNYYY":{character: characterList.a, businessType: [btList[13],btList[11],btList[5]]},
		"bNYYY":{character: characterList.b, businessType: [btList[11],btList[13],btList[6]]},
		"cNYYY":{character: characterList.c, businessType: [btList[2], btList[13],btList[3]]} ,
		"dNYYY":{character: characterList.d, businessType: [btList[2], btList[5], btList[8]]} ,
		"eNYYY":{character: characterList.e, businessType: [btList[6], btList[5], btList[2]]} ,
		"fNYYY":{character: characterList.f, businessType: [btList[11],btList[5], btList[14]]},
		"gNYYY":{character: characterList.g, businessType: [btList[1], btList[18],btList[6]]} ,
		"hNYYY":{character: characterList.h, businessType: [btList[9], btList[13],btList[0]]} ,
		"iNYYY":{character: characterList.i, businessType: [btList[7], btList[13],btList[11]]} ,
		"aNYYN":{character: characterList.a, businessType: [btList[13],btList[11],btList[0]]} ,
		"bNYYN":{character: characterList.b, businessType: [btList[11],btList[13],btList[6]]} ,
		"cNYYN":{character: characterList.c, businessType: [btList[3], btList[15],btList[7]]} ,
		"dNYYN":{character: characterList.d, businessType: [btList[2], btList[5], btList[8]]},
		"eNYYN":{character: characterList.e, businessType: [btList[6], btList[0], btList[2]]},
		"fNYYN":{character: characterList.f, businessType: [btList[11],btList[5], btList[14]]},
		"gNYYN":{character: characterList.g, businessType: [btList[1], btList[18],btList[6]]},
		"hNYYN":{character: characterList.h, businessType: [btList[9], btList[15],btList[0]]} ,
		"iNYYN":{character: characterList.i, businessType: [btList[14],btList[11],btList[6]]} ,
		"aNYNY":{character: characterList.a, businessType: [btList[11],btList[0], btList[13]]} ,
		"bNYNY":{character: characterList.b, businessType: [btList[13],btList[6], btList[11]]},
		"cNYNY":{character: characterList.c, businessType: [btList[15],btList[3], btList[4]]} ,
		"dNYNY":{character: characterList.d, businessType: [btList[5], btList[8], btList[3]]},
		"eNYNY":{character: characterList.e, businessType: [btList[0], btList[2], btList[6]]} ,
		"fNYNY":{character: characterList.f, businessType: [btList[5], btList[11],btList[14]]} ,
		"gNYNY":{character: characterList.g, businessType: [btList[18],btList[1], btList[6]]} ,
		"hNYNY":{character: characterList.h, businessType: [btList[15],btList[9], btList[0]]},
		"iNYNY":{character: characterList.i, businessType: [btList[11],btList[14],btList[6]]},
		"aNYNN":{character: characterList.a, businessType: [btList[14],btList[11],btList[0]]} ,
		"bNYNN":{character: characterList.b, businessType: [btList[11],btList[13],btList[6]]} ,
		"cNYNN":{character: characterList.c, businessType: [btList[3], btList[15],btList[7]]},
		"dNYNN":{character: characterList.d, businessType: [btList[2], btList[5], btList[15]]},
		"eNYNN":{character: characterList.e, businessType: [btList[6], btList[0], btList[13]]} ,
		"fNYNN":{character: characterList.f, businessType: [btList[11],btList[5], btList[14]]},
		"gNYNN":{character: characterList.g, businessType: [btList[1], btList[18],btList[14]]} ,
		"hNYNN":{character: characterList.h, businessType: [btList[9], btList[15],btList[0]]} ,
		"iNYNN":{character: characterList.i, businessType: [btList[14],btList[11],btList[6]]} ,
		"aNNYY":{character: characterList.a, businessType: [btList[17],btList[0], btList[2]]},
		"bNNYY":{character: characterList.b, businessType: [btList[7], btList[13],btList[10]]},
		"cNNYY":{character: characterList.c, businessType: [btList[10],btList[17],btList[2]]},
		"dNNYY":{character: characterList.d, businessType: [btList[8], btList[7], btList[17]]} ,
		"eNNYY":{character: characterList.e, businessType: [btList[17],btList[0], btList[8]]},
		"fNNYY":{character: characterList.f, businessType: [btList[13],btList[7], btList[0]]},
		"gNNYY":{character: characterList.g, businessType: [btList[13],btList[2], btList[7]]},
		"hNNYY":{character: characterList.h, businessType: [btList[7], btList[2], btList[10]]},
		"iNNYY":{character: characterList.i, businessType: [btList[7], btList[10],btList[13]]} ,
		"aNNYN":{character: characterList.a, businessType: [btList[15],btList[3], btList[9]]},
		"bNNYN":{character: characterList.b, businessType: [btList[8], btList[13],btList[0]]},
		"cNNYN":{character: characterList.c, businessType: [btList[0], btList[9], btList[15]]},
		"dNNYN":{character: characterList.d, businessType: [btList[3], btList[8], btList[16]]} ,
		"eNNYN":{character: characterList.e, businessType: [btList[8], btList[17],btList[3]]},
		"fNNYN":{character: characterList.f, businessType: [btList[13],btList[9], btList[17]]},
		"gNNYN":{character: characterList.g, businessType: [btList[9], btList[14],btList[8]]},
		"hNNYN":{character: characterList.h, businessType: [btList[16],btList[9], btList[3]]},
		"iNNYN":{character: characterList.i, businessType: [btList[0], btList[13],btList[3]]} ,
		"aNNNY":{character: characterList.a, businessType: [btList[11],btList[3], btList[13]]}  ,
		"bNNNY":{character: characterList.b, businessType: [btList[13],btList[7], btList[12]]}  ,
		"cNNNY":{character: characterList.c, businessType: [btList[3], btList[7], btList[13]]}  ,
		"dNNNY":{character: characterList.d, businessType: [btList[11],btList[13],btList[3]]}  ,
		"eNNNY":{character: characterList.e, businessType: [btList[7], btList[8], btList[14]]}  ,
		"fNNNY":{character: characterList.f, businessType: [btList[8], btList[11],btList[13]]}  ,
		"gNNNY":{character: characterList.g, businessType: [btList[13],btList[8], btList[12]]}  ,
		"hNNNY":{character: characterList.h, businessType: [btList[9], btList[7], btList[14]]}  ,
		"iNNNY":{character: characterList.i, businessType: [btList[11],btList[13],btList[7]]}  ,
		"aNNNN":{character: characterList.a, businessType: [btList[3], btList[11],btList[13]]}  ,
		"bNNNN":{character: characterList.b, businessType: [btList[7], btList[13],btList[12]]}  ,
		"cNNNN":{character: characterList.c, businessType: [btList[7], btList[3], btList[13]]}  ,
		"dNNNN":{character: characterList.d, businessType: [btList[13],btList[11],btList[3]]}  ,
		"eNNNN":{character: characterList.e, businessType: [btList[8], btList[7], btList[14]]}  ,
		"fNNNN":{character: characterList.f, businessType: [btList[11],btList[8], btList[13]]}  ,
		"gNNNN":{character: characterList.g, businessType: [btList[8], btList[13],btList[12]]}  ,
		"hNNNN":{character: characterList.h, businessType: [btList[7], btList[9], btList[14]]}  ,
		"iNNNN":{character: characterList.i, businessType: [btList[13],btList[11],btList[7]]} 
	};

	// 現在の質問番号
	var currentQstNum = 0;
	// 答えリスト
	var answerList = new Array();

	// 質問開始
	$("#start-section").on("click", ".start", function() {
		$("#start-section").hide();
		$("#question-section").show();
		showQuestion(0);
	});

	// 最初からやり直す
	$("#question-section").on("click", ".restart-btn", function() {
		$("#question-section").hide();
		$("#start-section").show();
		currentQstNum = 0;
		answerList = new Array();
	});

	var fstGroup = ["a","b","c","d","e","f","g","h","i"];
	var sndGroup = ["j", "k", "l", "m"];

	// 質問答える
	$("#question-section").on("click", ".answer-btn", function() {
		console.log($(this).attr("value"));
		var result = {
			group: $(this).attr("group"),
			value: $(this).attr("value")
		}
		
		answerList.push(result);
		if (++currentQstNum >= questionList.length) {
		// ------------------------------------
		// if (true) {
		// 	for(var i = 0; i < fstGroup.length; i++) {
		// 		for (var j = 0; j < 15; j++) { answerList.push( { group: fstGroup[i], value: "N" }); }
		// 	}
		// 	for(var i = 0; i < sndGroup.length; i++) {
		// 		for (var j = 0; j < 5; j++) { answerList.push( { group: sndGroup[i], value: "N" }); }
		// 	}
		// ------------------------------------
			// 答え終了、結果集計する
			var resultPattern = "";
			// A-Iまでもっともはいが多いカテゴリ
			var maxGroupNum = 0;
			var maxGroup = '';
			for (var i = 0; i < fstGroup.length; i++) {
				var group = fstGroup[i];
				var groupNum = 0;
				$.each(answerList, function(index, element) {
					if (group == element.group && element.value == "Y") {
						groupNum++;
					}
				});
				if (groupNum > maxGroupNum) {
					maxGroupNum = groupNum;
					maxGroup = group;
				}
			}
			// console.log("maxGroupNum=" + maxGroupNum);
			// console.log("maxGroup=" + maxGroup);
			// 全部「いいえ」の場合、グループを"d"にする
			maxGroup = (maxGroup.length < 1) ? "d" : maxGroup;
			resultPattern += maxGroup;

			for (var i = 0; i < sndGroup.length; i++) {
				var group = sndGroup[i];
				var yesNum = 0;
				$.each(answerList, function(index, element) {
					if (group == element.group && element.value == "Y") {
						yesNum++;
					}
				});
				resultPattern += ((yesNum >= 3) ? "Y" : "N");
			}

			console.log("resultPattern=" + resultPattern);

			var showResult = {};
			// 該当パターンより結果取得
			for(key in rules){
				if(resultPattern == key) {
					showResult = rules[key];
					break;
				}
			}
			console.log("showResult=" + showResult);

			// 結果表示
			$("#question-section").hide();
			$("#result-section").empty();
			$("#result-section").show();
			$("#result-template").tmpl(showResult).appendTo("#result-section");
		} else {
			showQuestion(currentQstNum);
		}
	});

	// 質問表示
	var showQuestion = function(qNum) {
		var question = questionList[qNum];
		question.qNum = qNum;
		$("#question-section").empty();
		$("#question-template").tmpl(question).appendTo("#question-section");
	};

	// 結果を画像として保存
	$("#result-section").on("click", ".save", function() {
		html2canvas(document.body, {
	        onrendered: function(canvas){
	        	var fileName = "result.jpg";
	          	//aタグのhrefにキャプチャ画像のURLを設定
				var link = document.createElement('a');
			    link.href = canvas.toDataURL("image/jpg");
			    link.download = fileName;
			    link.target = "_blank";
			    link.click();
			    if (canvas.msToBlob) { 
			    	//for IE
	                var blob = canvas.msToBlob();
	                window.navigator.msSaveBlob(blob, fileName);
	            }
	        }
	    });
	});
});