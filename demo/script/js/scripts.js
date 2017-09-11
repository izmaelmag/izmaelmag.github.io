$(document).ready(function() {

	// Изменение текста вопроса
	$('body').on('change', '.cl_answer, .cl_question', function() {

		var p_lvl = $(this).parent().parent().data('level'),
			p_num = $(this).parent().parent().data('query'),
			p_ans = $(this).parent().parent().find(".cl_answer").val(),
			p_rea = $(this).parent().parent().find(".cl_question").val();

		app.alert("This level: " + p_lvl + "; This number: " + p_num + ";");

		var mas = app.answers;
		_.each(mas, function(ans) {
			if (ans._id[0] == p_lvl && ans._id[1] == p_num) {
				ans.answer = p_ans;
				ans.reaction = p_rea;
			}
		});

	});

	$('body').on('change', '.start_question', function() {
		app.startQuestion = $(this).val();
	});

	// КЛИК НА КНОПКУ "ДОБАВИТЬ ОТВЕТ"
	$('body').on('click', '.add-but' , function(){

		// ОПРЕДЕЛЯЕМ РОДИТЕЛЬСКИЙ ЭЛЕМЕНТ ASK
	    var $th = $(this).parent().parent();

	    // УДАЛЯЕМ БЛОК "конец диалога"
		$(this).parent().next().next('.finish').remove();
		$th.children(".a").children(".close").remove();

		// ЗАПИСЫВАЕМ ЗНАЧЕНИЯ УРОВНЯ И КОЛИЧЕСТВА ДОЧЕРНИХ БЛОКОВ ВЫБРАННОГО БЛОКА
		var cur_lvl = $th.data("level"),
			cur_num = $th.data("query");

		// УВЕЛИЧИВАЕМ ЗНАЧЕНИЯ НА ЕДИНИЦУ ДЛЯ СОЗДАНИЯ НОВОГО БЛОКА
		var add_lvl = cur_lvl/1+1,
			add_num = app.num_in_level(add_lvl) + 1;

		// ШАБЛОН ДЛЯ ДОБАВЛЕНИЯ НОВОГО БЛОКА
		var block =
		'<div class="answer">'+
			'<div class="ask" data-level="' + add_lvl + '" data-query="' + add_num + '">'+
				'<span class="b"><span class="c"></span></span>'+
				'<span class="a">'+
					'<div class="close"></div>'+
					'<div class="goup"></div>'+
					'<h3>Ответ</h3>'+
					'<textarea class="cl_answer"></textarea>'+
					'<h3>Введите вопрос</h3>'+
					'<textarea class="cl_question"></textarea>'+
					'<span class="add-but">Добавить ответ</span>'+
				'</span>'+
				'<span class="c"></span>'+
				'<span class="finish">Конец диалога</span>'+
			'</div>'+
		'</div>';
		
		// ДОБАВЛЯЕМ БЛОК
	    $th.append(block);

	    // КОНСОЛЬ
		// console.info("You've selected block numer " + $th.data("query") + " in level " + cur_lvl);
		// console.info("There are " + $th.children(".answer").length + " items in " + $th.data("query") + " block on level " + add_lvl + " now." + "\n\n");

		// ЗАНЕСЕНИЕ ОТВЕТА В БАЗУ
		var curr_obj = new answ(add_lvl,add_num,cur_lvl,cur_num,"","");
		app.addAnswer(curr_obj);

		// АНИМИРУЕМ ПОЯВЛЕНИЕ БЛОКА
	    $th.find(".answer").animate({
	    	opacity: 1
	    }, 600);

	    app.alert("Вы добавили блок");
	});

	// УДАЛЕНИЕ ЭЛЕМЕНТА
	$('body').on('click', '.close', function() {

		var t_l = $(this).parent().parent().data("level"),
			t_q = $(this).parent().parent().data("query"),
			mas = [t_l,t_q];

		app.delete_answer(mas);

		$(this).parent().parent().parent().animate({
			opacity: 0
		},500,function() {
			$(this).parent().children(".a").append('<div class="close"></div>');
			$(this).remove();
		});

	});

	// ПОДСВЕТКА ВЕТВИ
	var shown = 0;

	$('body').on('click', '.goup', function() {
		if (shown == 0)
		{
			$(this).animate({'box-shadow': '0px 0px 0px 10px #red'});
			var parent = $(this).parent().parent(),
				c_l = parent.data("level"),
				c_q = parent.data("query");

			$(".ask:not(.main) .a").animate({opacity: .2},500);
			shown = 1;
			app.highlightBranch(c_l,c_q);
		}
		else
		{
			shown = 0;
			$(".ask:not(.main) .a").animate({opacity: 1},500);
		}
	});

	// РАБОТА С МЕНЮ
	$('body').on('click', '#menu_open', function() {
		$(".menu").addClass("active");
		$(".menu_splash").addClass("active");
	});

	$('body').on('click', '#menu_close, .menu_splash', function() {
		$(".menu").removeClass("active");
		$(".menu_splash").removeClass("active");
	});

	// СКРОЛЛ НА КРАЯХ ЭКРАНА
    var count = 20;
    var interval;

    $(".move")
    .on('mouseover', function() {
        var div = $('body'),
        	dir = $(this).data("dir");

        interval = setInterval(function(){

            var pos_t = div.scrollTop();
            var pos_l = div.scrollLeft();

            dir == 1 ? div.scrollTop(pos_t - count) : "";
            dir == 2 ? div.scrollTop(pos_t + count) : "";
            dir == 3 ? div.scrollLeft(pos_l + count) : "";
            dir == 4 ? div.scrollLeft(pos_l - count) : "";

        }, 5);
    })
    .on('mouseout', function() {
        clearInterval(interval);
    });

    // ЗАПУСК СКРИПТА
    $('body').on('click', '.run_script', function() {
    	play.cur_lvl = 2;
    	play.run();
    });

    $('body').on('click', '#close_player', function() {
    	play.stop();
    });

    $('body').on('click', '.ans_item', function() {
    	var num = $(this).data("num");
    	play.refresh(num);
    });

});