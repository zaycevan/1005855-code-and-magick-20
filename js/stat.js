'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 10;
var GAP_X = 20;
var GAP_Y = 18;
var FONT_GAP = 28;
var STAT_GAP_X = 50;
var STAT_GAP_Y = 10;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var colors = ['hsl(0, 100%, 50%)', 'hsl(240, 100%, 50%)', 'hsl(240, 40%, 50%)', 'hsl(240, 10%, 50%)'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';


  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_X, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + FONT_GAP + GAP_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + STAT_GAP_X + (BAR_WIDTH + STAT_GAP_X) * i, CLOUD_Y + FONT_GAP + GAP_Y + FONT_GAP + MAX_BAR_HEIGHT * (maxTime - times[i]) / maxTime);

    ctx.fillStyle = colors[i];

    ctx.fillRect(CLOUD_X + STAT_GAP_X + (BAR_WIDTH + STAT_GAP_X) * i, CLOUD_Y + FONT_GAP + GAP_Y + FONT_GAP + MAX_BAR_HEIGHT * (maxTime - times[i]) / maxTime + STAT_GAP_Y, BAR_WIDTH, MAX_BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = '#000';

    ctx.fillText(players[i], CLOUD_X + STAT_GAP_X + (BAR_WIDTH + STAT_GAP_X) * i, CLOUD_Y + FONT_GAP + GAP_Y + FONT_GAP + MAX_BAR_HEIGHT * (maxTime - times[i]) / maxTime + STAT_GAP_Y + MAX_BAR_HEIGHT * times[i] / maxTime + GAP_Y);
  }
};
