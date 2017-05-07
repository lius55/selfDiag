String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$(function(){

	var questionList = [
		{ no: 1, group: "a", content: "小さいミスや欠点が気になる" },
		{ no: 2, group: "a", content: "冗談が簡単に言えない" },
		{ no: 3, group: "a", content: "全てに正直でありたいと思ってしまう" },
		{ no: 4, group: "a", content: "嘘やごまかしなど道に外れたことはしたくないと思ってしまう" },
		{ no: 5, group: "a", content: "正しくあることが大事である" },
		{ no: 6, group: "a", content: "することがたくさんあるのに、時間が足りずいつも焦っている" },
		{ no: 7, group: "a", content: "自分の時間の使い方を細かく分析してしまう" },
		{ no: 8, group: "a", content: "悪いことはどうしても許せないと思い込んでしまう" },
		{ no: 9, group: "a", content: "物事が公正ではないと悩んでしまう" },
		{ no: 10, group: "a", content: "常に向上心があり、もっと向上しなければ思っている" },
		{ no: 11, group: "a", content: "しばしば欲求不満に駆られる" },
		{ no: 12, group: "a", content: "正しいか誤っているか？良いか悪いか？で物事を判断してしまう" },
		{ no: 13, group: "a", content: "時間の浪費をさけようと付き合いを断ったりする" },
		{ no: 14, group: "a", content: "欠点をどうにか改めようと努力する" },
		{ no: 15, group: "a", content: "何事もきちんとしていないとすぐにイライラしてしまう" },
		{ no: 16, group: "b", content: "周囲から頼られていると感じることがよくある" },
		{ no: 17, group: "b", content: "「他人から必要な存在でありたい」と思っている" },
		{ no: 18, group: "b", content: "親近感をもたれやすい" },
		{ no: 19, group: "b", content: "他人が困っていたり、苦しんでいると助けたくなる" },
		{ no: 20, group: "b", content: "他人が慰めと助言を自分に求めて欲しいと思っている" },
		{ no: 21, group: "b", content: "他人から頼られることを重荷に感じる時がある" },
		{ no: 22, group: "b", content: "基本的に自分自身のことは後回しである" },
		{ no: 23, group: "b", content: "いつも誰かと「近くにいる」ことを感じていたい" },
		{ no: 24, group: "b", content: "感謝されないと自分が犠牲者になったと感じる" },
		{ no: 25, group: "b", content: "気持ちが通じ合うと喜びを感じる" },
		{ no: 26, group: "b", content: "人に尽くすことによってその人にとって自分が大事な存在になりたいと思う" },
		{ no: 27, group: "b", content: "自分の助言などで他人が成長してくれるのが嬉しい" },
		{ no: 28, group: "b", content: "人が自分を気遣ってくれている以上に、他人を気遣っている" },
		{ no: 29, group: "b", content: "周囲の反応に敏感である" },
		{ no: 30, group: "b", content: "「愛し、愛される」ことが、人生で大切なことであると感じている" }
		// { no: 31, group: "c", content: "いつも何かしているのが好き" },
		// { no: 32, group: "c", content: "仕事は専門的でありたい" },
		// { no: 33, group: "c", content: "人と一緒に仕事をするのが好きで、良い仲間でありたいと感じている" },
		// { no: 34, group: "c", content: "物事を達成するには組織化して、無駄なく効率的にやるのがいいと思っている" },
		// { no: 35, group: "c", content: "自分は成功していると感じていたい" },
		// { no: 36, group: "c", content: "目標を明確に定め、その結果にむかって今自分がすべきことを知っている" },
		// { no: 37, group: "c", content: "自分がやり遂げた実績を数値にして示すのが好き" },
		// { no: 38, group: "c", content: "自分で決断することを好むが、臨機応変に意見を変えることができる" },
		// { no: 39, group: "c", content: "目標を達成することは、相手に合わせて妥協することも大切だと思っている" },
		// { no: 40, group: "c", content: "過去の失敗や間違いより、やり遂げたことを感じたい" },
		// { no: 41, group: "c", content: "自分のしていることを否定され「うまくいっていない」と言われることが嫌いだ" },
		// { no: 42, group: "c", content: "何かを続けるより、どんどん新しいことに挑戦するのが好きだ" },
		// { no: 43, group: "c", content: "周囲から説得力があると言われる" },
		// { no: 44, group: "c", content: "物事を達成し、自己主張の強い人間だと思われている" },
		// { no: 45, group: "c", content: "第一印象は大切である" },
		// { no: 46, group: "d", content: "自分の過去に哀愁を感じている" },
		// { no: 47, group: "d", content: "いつも自然に、ありのままに振る舞いたいができない" },
		// { no: 48, group: "d", content: "象徴的なものに惹かれやすい" },
		// { no: 49, group: "d", content: "自分の感じていることを他人に理解してもらえない" },
		// { no: 50, group: "d", content: "いつも礼儀正しく品位を保ちたい" },
		// { no: 51, group: "d", content: "周囲の雰囲気は大事である" },
		// { no: 52, group: "d", content: "人生は劇場で、舞台で演じているように感じている" },
		// { no: 53, group: "d", content: "マナーの良さ、良い趣味は自分に大切なものである" },
		// { no: 54, group: "d", content: "自分を平凡だと感じたくない" },
		// { no: 55, group: "d", content: "失われたもの、死、苦しみを思うとつい思い沈んでしまう" },
		// { no: 56, group: "d", content: "人間関係がうまくいかないことに人より困惑してしまう" },
		// { no: 57, group: "d", content: "自分を悲劇のヒロインのように感じてしまうことがある" },
		// { no: 58, group: "d", content: "感情の起伏が激しく、高ぶったり沈んだりするが、どっちつかづだと生き生きした感じがなくなってしまう" },
		// { no: 59, group: "d", content: "芸術や美的表現は感情を表す手段として重要である" },
		// { no: 60, group: "d", content: "周囲に芝居がかっていると言われる" },
		// { no: 61, group: "e", content: "感情を表すのが苦手だ" },
		// { no: 62, group: "e", content: "何ということもない会話をするのが苦手である" },
		// { no: 63, group: "e", content: "総合的にものを見たり、意見をまとめるのが得意" },
		// { no: 64, group: "e", content: "日常でプライベートな時間と場所があるとくつろげる" },
		// { no: 65, group: "e", content: "自分が率先するより、人に任せるタイプである" },
		// { no: 66, group: "e", content: "自分が関わる前に、他人がしていることを観察する傾向がある" },
		// { no: 67, group: "e", content: "一人でいるのが好きだ" },
		// { no: 68, group: "e", content: "物静かである" },
		// { no: 69, group: "e", content: "自分から頼みごとをするのは苦手だ" },
		// { no: 70, group: "e", content: "問題が起きたら、自分で解決したい" },
		// { no: 71, group: "e", content: "自己主張が苦手である" },
		// { no: 72, group: "e", content: "考えることで問題解決をしようとする" },
		// { no: 73, group: "e", content: "自分は時間やお金に関してケチだと思う" },
		// { no: 74, group: "e", content: "「大きな声で話してほしい」と言われることがよくある" },
		// { no: 75, group: "e", content: "情報を人に「与える」より「受け取る」ほうが多い" },
		// { no: 76, group: "f", content: "明確な指針を持ち、自分の立場を知っていたい" },
		// { no: 77, group: "f", content: "常に危険を警戒している" },
		// { no: 78, group: "f", content: "物事を全て真面目に考えすぎる" },
		// { no: 79, group: "f", content: "何か間違いがないかいつも自問している" },
		// { no: 80, group: "f", content: "批判を攻撃として感じてしまう" },
		// { no: 81, group: "f", content: "自分の仲間や配偶者が何を考えているか心配することが多い" },
		// { no: 82, group: "f", content: "身を粉にして働くことができる" },
		// { no: 83, group: "f", content: "周囲は自分を「思いやりがある」と見てくれる" },
		// { no: 84, group: "f", content: "優れたユーモアの感覚があると言われる" },
		// { no: 85, group: "f", content: "親密な人との関係で弱い立場になれば一層怒りっぽくなる" },
		// { no: 86, group: "f", content: "自分を誉めて操縦しようとする人はすぐに分かる" },
		// { no: 87, group: "f", content: "予測できることが好きである" },
		// { no: 88, group: "f", content: "自分で自分の成功を妨害してきた" },
		// { no: 89, group: "f", content: "身綺麗にし、整頓しておくと自分の生活をコントロールできていると感じれる" },
		// { no: 90, group: "f", content: "自惚れている人や野心的なタイプが好きでない" },
		// { no: 91, group: "g", content: "人を疑ったり、動機を探したりしない方だ" },
		// { no: 92, group: "g", content: "楽しいことが好きだ" },
		// { no: 93, group: "g", content: "物事はつも良い方向へ展開していく" },
		// { no: 94, group: "g", content: "他の人が私と同じように明るい気持ちでいればいいのにと思う" },
		// { no: 95, group: "g", content: "人生の暗い面には目を向けたくない" },
		// { no: 96, group: "g", content: "出会う人に敵意を感じることはほとんどない" },
		// { no: 97, group: "g", content: "ジョークや明るい話が大好きだ" },
		// { no: 98, group: "g", content: "自分は陽気で子供っぽい人間だと思う" },
		// { no: 99, group: "g", content: "パーティーなどで目立ちたがり屋である" },
		// { no: 100, group: "g", content: "物事は広い視野で捉えるべきだと思う" },
		// { no: 101, group: "g", content: "「よいもの」は「もっとよく」と強く思う" },
		// { no: 102, group: "g", content: "苦労の生み出す「味わいのある人生」より、「楽しさいっぽいの人生」がいい" },
		// { no: 103, group: "g", content: "人を喜ばせることが好き" },
		// { no: 104, group: "g", content: "嫌なことはできるだけ避けたい" },
		// { no: 105, group: "g", content: "ひとつのことに集中するより、関心がどんどん移っていくタイプだ" },
		// { no: 106, group: "h", content: "自分が必要とするもののために戦い、守りぬく" },
		// { no: 107, group: "h", content: "他人の弱点をすぐに見つけ、相手が挑戦してきたらすぐに弱点を攻撃する" },
		// { no: 108, group: "h", content: "他人と対決することを恐れない" },
		// { no: 109, group: "h", content: "グループで権力をもっているのが誰かすぐに分かる" },
		// { no: 110, group: "h", content: "自己主張が強い人間である" },
		// { no: 111, group: "h", content: "動いているのが好きだ" },
		// { no: 112, group: "h", content: "仁義と筋を通すのは大事である" },
		// { no: 113, group: "h", content: "権威や権限の下にあるものをかばう傾向がある" },
		// { no: 114, group: "h", content: "自分は「素朴」な人間である" },
		// { no: 115, group: "h", content: "自己反省や自己分析には興味が無い" },
		// { no: 116, group: "h", content: "順応しにくい人間である" },
		// { no: 117, group: "h", content: "余計な世話をやかれるのが嫌いだ" },
		// { no: 118, group: "h", content: "自分は働きものである" },
		// { no: 119, group: "h", content: "物事を成り行きに任せることに抵抗がある" },
		// { no: 120, group: "h", content: "他人の意見で自分を正すのは納得がいかない" },
		// { no: 121, group: "i", content: "多くの人は物事に力を使いすぎている" },
		// { no: 122, group: "i", content: "平穏平静な人間である" },
		// { no: 123, group: "i", content: "なにもしていない時が好きだ" },
		// { no: 124, group: "i", content: "のんきな性格である" },
		// { no: 125, group: "i", content: "前に眠れなかった夜がいつか思い出せない" },
		// { no: 126, group: "i", content: "ほとんどの人に差はあまりないと思う" },
		// { no: 127, group: "i", content: "物事で興奮することはほとんどない" },
		// { no: 128, group: "i", content: "何かを始めるのは外部からの刺激がないと行動できない" },
		// { no: 129, group: "i", content: "力を浪費するのが嫌いで、常に力の節約を考えている" },
		// { no: 130, group: "i", content: "中途半端で落ち着かないことが好きでない" },
		// { no: 131, group: "i", content: "自分が安定した人間であると誇りを持っている" },
		// { no: 132, group: "i", content: "人々を落ち着かせるために相手に合わせて行動する傾向がある" },
		// { no: 133, group: "i", content: "自分を重要な人間だと考えていない" },
		// { no: 134, group: "i", content: "人の話を聞くのが苦手だ" },
		// { no: 135, group: "i", content: "「座れるのになぜ立つのか」という考え方に賛成である" },
		// { no: 136, group: "j", content: "ローリスク・ローリターンよりもハイリスク・ハイリターンの方が性に合っている" },
		// { no: 137, group: "j", content: "90%の確率で手に入る毎月10万円の案件と、20%の確率で手に入る毎月100万円の案件があれば、後者の方がやりたい" },
		// { no: 138, group: "j", content: "ギャンブルが好きだ" },
		// { no: 139, group: "j", content: "ビジネスにリスクが伴うのは当たり前だと思っている" },
		// { no: 140, group: "j", content: "いつかは年収1億円になりたいと考えている" },
		// { no: 141, group: "k", content: "ビジネスにかけられるお金は無いが、時間ならたくさんある" },
		// { no: 142, group: "k", content: "ビジネスの立ち上げが1ヶ月遅れたとしても、初期投資は0円にしたい" },
		// { no: 143, group: "k", content: "毎日3時間以上、ビジネスに時間を使える" },
		// { no: 144, group: "k", content: "時間をかけて必ず成果が出るなら、いくらでも時間をかける" },
		// { no: 145, group: "k", content: "時間をお金で買う考え方はあまり好きではない" },
		// { no: 146, group: "l", content: "算数よりも国語の方が得意だ" },
		// { no: 147, group: "l", content: "文章を書くのが好きだ" },
		// { no: 148, group: "l", content: "セールスコピーライティングを勉強した事がある" },
		// { no: 149, group: "l", content: "ブログや日記を書いている" },
		// { no: 150, group: "l", content: "数字には強くない" },
		// { no: 151, group: "m", content: "営業経験がある" },
		// { no: 152, group: "m", content: "LINEのメッセージで商品を売る自信がある" },
		// { no: 153, group: "m", content: "人と話すのが好きだ" },
		// { no: 154, group: "m", content: "１人でコツコツと仕組みを作ることは苦手だ" },
		// { no: 155, group: "m", content: "調べ物をすることが苦手だ" }
	];

	var resultList = {
		a: {
			character: "完璧主義", 
			temper: "完璧を求め、何事にも向上心を持って行い、正確に遂行する", 
			strength: "責任感、真面目、努力家、平等、正義感", 
			weakness: "批判的、融通が利かない、心配性、強い不信感", 
			detail: "あなたは完璧を求めて、何事にも向上心を持ち正確に仕事をこなしていく【完璧主義】タイプです。<br/>" +
				"その真面目さと正確に実行をする点からどのビジネスモデルのノウハウを実践しても結果を出すことができるでしょう。<br/>" +
				"仕事においては依頼されたことを最後まで実践をする責任感があるので、周りから信頼はされますが、１度にたくさん頼まれると" +
				"どれも終わらなくなるという、融通が利かない点もあります。<br/>" +
				"ただネットビジネスでは１度に多くのことをやるよりも、１つのことに集中して作業を行った方が最短で結果が出ますし、絞った方がスキルも磨かれ、" +
				"より大きな結果を残すことが出来ます。<br/>" +
				"あなたは常に高みを目指して、毎日のようにコツコツ作業ができるので、ネットビジネスにはとても向いているでしょう。<br/>" +
				"しかし、自分が業務に対し完璧を求めるあまり、他人にも完璧を求めてしまうので、" +
				"他人に依頼をする時に「ちゃんとできるかな」と強い不信感を抱いてしまうこともあるでしょう。<br/>" +
				"仕事も細部まで準備し、どんなに小さなミスでも見逃さずチェックし、抜かりなく行うので、独立してビジネスに取り組んでも高い成果が得られるでしょう。"
		},
		b: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: ""
		},
		c: {
			character: "野心家", 
			temper: "成功を求め、達成し、臨機応変・効率的に何事にも取り組む", 
			strength: "成功志向、目標達成、能率、自信、行動力", 
			weakness: "自己演出、自己欺瞞、うぬぼれ、責任転嫁", 
			detail: ""
		},
		d: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: ""
		},
		e: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: ""
		},
		f: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: ""
		},
		h: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: ""
		},
		i: {
			character: "利他主義", 
			temper: "愛と友情を尊重し、人を助け、喜ばせ、他者の才能を引き出す", 
			strength: "愛情、親切、思いやり、支援、自己犠牲", 
			weakness: "八方美人、おせっかい、被害者意識、自己喪失", 
			detail: ""
		}
	};

	var rule = {
		"aYYYY" : 1,
		"bYYYY"	: 2,
		"cYYYY" : 3,
		"dYYYY" : 4,
		"eYYYY" : 5,
		"fYYYY" : 6,
		"gYYYY" : 7,
		"hYYYY" : 8,
		"iYYYY" : 9,
		"aYYYN" : 1,
		"bYYYN"	: 2,
		"cYYYN" : 3,
		"dYYYN" : 4,
		"eYYYN" : 5,
		"fYYYN" : 6,
		"gYYYN" : 7,
		"hYYYN" : 8,
		"iYYYN" : 9,
		"aYYNY" : 1,
		"bYYNY"	: 2,
		"cYYNY" : 3,
		"dYYNY" : 4,
		"eYYNY" : 5,
		"fYYNY" : 6,
		"gYYNY" : 7,
		"hYYNY" : 8,
		"iYYNY" : 9,
		"aYYNN" : 1,
		"bYYNN"	: 2,
		"cYYNN" : 3,
		"dYYNN" : 4,
		"eYYNN" : 5,
		"fYYNN" : 6,
		"gYYNN" : 7,
		"hYYNN" : 8,
		"iYYNN" : 9,
	};

	// 現在の質問番号
	var currentQstNum = 0;
	// 答えリスト
	var answerList = new Array();

	// 質問開始
	$("#start-section").on("click", ".start", function() {
		$("#start-section").hide();
		$("#question-section").show();
		showQuestion();
	});

	// 最初からやり直す
	$("#question-section").on("click", ".restart-btn", function() {
		$("#question-section").hide();
		$("#start-section").show();
		currentQstNum = 0;
		answerList = new Array();
	});

	var aggGroup = ["a","b","c","d","e","f","g","h","i"];

	// 質問答える
	$("#question-section").on("click", ".answer-btn", function() {
		console.log($(this).attr("value"));
		var result = {
			group: $(this).attr("group"),
			value: $(this).attr("value")
		}
		answerList.push(result);
		if (++currentQstNum >= questionList.length) {
			// 答え終了、結果集計する
			console.log("終了");
			// A-Iまでもっともはいが多いカテゴリ
			var maxGroupNum = 0;
			var maxGroup = '';
			for (var i = 0; i < aggGroup.length; i++) {
				var group = aggGroup[i];
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
			console.log("maxGroupNum=" + maxGroupNum);
			console.log("maxGroup=" + maxGroup);
		} else {
			showQuestion(currentQstNum);
		}
	});

	// 質問表示
	var showQuestion = function(qNum = 0) {
		var question = questionList[qNum];
		question.qNum = qNum;
		$("#question-section").empty();
		$("#question-template").tmpl(question).appendTo("#question-section");
	}
});