// Класс скрипта
function scriptApp() {

	this.scr_title = "Скрипт";
	this.startQuestion = "Начальный вопрос";
	this.answers = [];

	// Вставляет объект ответа в массив
	this.addAnswer = function(ans) {
		this.answers.push(ans);
	};

	this.delete_answer = function(m) {
		var c_l = m[0],
			c_q = m[1];

		_.each(app.answers, function(obj,index) {
			if (obj != undefined && obj._id[0] == c_l && obj._id[1] == c_q) {
				app.say("This is it");
				app.say(obj + "—" + index);
				app.answers.splice(index,1);;
			}
		});
	};

	// Выводит список всех существующих вопросов уровня ниже 1
	this.show_all = function() {
		var result;
		var mas = this.answers;

		console.info("ВСЕ БЛОКИ ("+ this.answers.length + " штук)");
		_.each(mas, function(ans) {
			console.info("Инфо: lvl=" + ans._id[0] + "; query=" + ans._id[1] + "; Ответ: " + ans.answer + "; Вопрос: " + ans.reaction + ";");
		});
	};

	// Возвращает количество элементов на уровне
	this.num_in_level = function(lvl) {
		var q = '*[data-level="' + lvl + '"]';
		return $(q).length;
	};

	// Возвращает объект вопроса по уровню и номеру (доработать)
	this.get_block = function(l,q) {
		var mas = this.answers;

		var result = _.find(mas, function(obj) {
			return (obj._id[0] == l && obj._id[1] == q);
		});

		return result;
	};

	// Вывод информации в консоль для проверки работы событий
	this.say = function(s) {
		s ? console.info(s) : console.info("DAT ASS!!");
	};

	this.highlightBranch = function(l,q) {

		var mas = this.answers;

		_.each(mas, function(el) {
			if (el._id[0] == l && el._id[1] == q) {
				app.say("This: " + l + "—" + q + "; Parent: " + el.p_id[0] + "—" + el.p_id[1]);

				$('[data-level="'+l+'"][data-query="'+q+'"]').children(".a").animate({opacity: 1});

				el.p_id != undefined ? app.highlightBranch(el.p_id[0],el.p_id[1]) : app.say("dddddddd") ;
			}
		});
	};

	// Перерассчет объектов после удаления
	this.recount = function(l) {
		var els = this.num_in_level(l),
			mas = this.answers,
			max = 0, t_mas = [];	

		_.each(mas, function(el) {
			{
				el._id[0] === l ? t_mas.push(el._id[1]) : "";
			}
		});

		max = _.max(t_mas);

		var msg = "";

		els < max ? msg = "error" : msg = "no errors";

		alert("Max value in level " + l + " is " + max + ";\nNumber of elements is " + els + ";\nThere is " + msg);
	};

	this.alert = function(msg) {
		$(".alert p").text(msg);
		$(".alert").addClass("active");
		$(".alert").animate({top: 0}, 2200, function() {
			$(".alert").removeClass("active");
		});

		return false;
	};
}

// Класс вопроса
function answ(l,q,pl,pq,a,r) {
	this._id = [l,q];
	this.p_id = [pl,pq];
	this.answer = a;
	this.reaction = r;
}

// Класс плеера
function player(data) {
	this.data = data;
	this.cur_lvl = 2;
	this.pl = "";

	this.run = function() {
		data.alert("Запуск скрипта");
		this.pl = $("#scr_player");

		this.pl.addClass("active");
		this.pl.find(".player .title").text( data.scr_title );
		this.pl.find(".player .question").text( data.startQuestion );
		this.pl.find(".player .answers").text("");


		_.each(data.answers, function(el) {
			if (el._id[0] == 2)
			{
				var i = '<span class="ans_item" data-num="'+el._id[1]+'">'+el.answer+'<span>';
				$("#scr_player").find(".answers").append(i);
			}
		});
	};

	this.refresh = function(q) {
		var l = this.cur_lvl++;
		$(".player .answers").text("");
		data.alert("Загрузить объект номер " + q + " уровня " + l);

		_.each(app.answers, function(el) {
			if (el._id[0] == l && el._id[1] == q)
			{
				$("#scr_player").find(".question").text(el.reaction);
			}
			else if (el.p_id[0] == l && el.p_id[1] == q)
			{
				var i = '<span class="ans_item" data-num="'+el._id[1]+'">'+el.answer+'<span>';
				$("#scr_player").find(".answers").append(i);
			}
		});
	};

	this.stop = function() {
		this.pl = $("#scr_player");
		this.pl.removeClass("active");
	};
}

var app = new scriptApp();
var play = new player(app);