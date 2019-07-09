var u = navigator.userAgent;
str = u;
str = str.replace(/; wv/, "")
try {
	str = str.match(/\((.+?)\)/i)[1];
} catch (e) {

}
arr = str.split(";");
str2 = arr.pop();
arr2 = str2.split("Build");
str3 = arr2[0];

//document.write(u.indexOf('NT1'));
if (str3.indexOf('OPPO') > -1) {
	str4 = str3;
} else if (u.indexOf('R8207') > -1) {
	str3 = 'OPPO R8207';
	str4 = str3;
} else if (str.indexOf('vivo') > -1) {
	str4 = str3;
} else if (str.indexOf('MZ-') > -1) {
	str3 = str3.replace(/MZ-/, "魅族");
	str4 = str3;
} else if (str.indexOf('M5 Note') > -1) {
	str3 = '魅族M5 Note';
	str4 = str3;
} else if (str.indexOf('MX5') > -1) {
	str3 = '魅族' + str3;;
	str4 = str3;
} else if (str.indexOf('m3 note') > -1) {
	str3 = '魅蓝note3';
	str4 = str3;
} else if (str.indexOf('iPhone') > -1) {
	var height = document.documentElement.clientHeight;
	var wigth = document.documentElement.clientWidth;
	if (wigth == 414) {
		phoneType = "iphone6 plus";
	} else if (wigth == 375) {
		phoneType = "iphone6";
	} else if (wigth == 320 && height == 525) {
		phoneType = "iphone5s";
	} else if (wigth == 320 && height == 486) {
		phoneType = "iphone5";
	} else if (wigth == 320 && height < 486) {
		phoneType = "iphone4";
	} else {
		phoneType = "iphone";
	}
	str4 = phoneType;
} else if (u.indexOf('XiaoMi') > -1) {
	
	str3 = '小米' + str3;
	str3 = str3.replace(/小米 Redmi/, "红米");
	str3 = str3.replace(/小米 HM/, "红米");
	str4 = str3;
} else if (str.indexOf('MI 4LTE') > -1) {
	str3 = '小米' + str3;
	str4 = str3;
} else if (str.indexOf('MI 5') > -1) {
	str3 = '小米' + str3;
	str4 = str3;
}else if (str.indexOf('MI MAX') > -1) {
	str3 = '小米' + str3;
	str4 = str3;
} else if (str.indexOf('1505-A01') > -1) {
	str3 = '360';
	str4 = str3;
} else if (str.indexOf('Redmi') > -1) {
	str3 = str3.replace(/Redmi/, "红米");
	str4 = str3;
} else if (u.indexOf('BLN-AL10') > -1) {
	str3 = '荣耀畅玩6X';
	str4 = str3;
} else if (u.indexOf('MHA-AL00') > -1) {
	str3 = '华为Mate 9';
	str4 = str3;
} else if (u.indexOf('NEM-AL10') > -1) {
	str3 = '荣耀畅玩5C';
	str4 = str3;
} else if (u.indexOf('KIW-AL10') > -1) {
	str3 = '荣耀畅玩5X';
	str4 = str3;
} else if (u.indexOf('CAM-AL00') > -1 || u.indexOf('CAM-TL00') > -1) {
	str3 = '荣耀畅玩5A';
	str4 = str3;
} else if (u.indexOf('SCL-AL00') > -1) {
	str3 = '华为荣耀4A';
	str4 = str3;
} else if (u.indexOf('PLK-AL10') > -1 || u.indexOf('PLK-TL01H') > -1) {
	str3 = '荣耀7';
	str4 = str3;
} else if (u.indexOf('KIW-TL00H') > -1) {
	str3 = '荣耀畅玩5X';
	str4 = str3;
} else if (u.indexOf('CHM-TL00H') > -1) {
	str3 = '荣耀畅玩4C';
	str4 = str3;
} else if (u.indexOf('SCL-TL00H') > -1) {
	str3 = '华为荣耀4A';
	str4 = str3;
} else if (u.indexOf('ATH-AL00') > -1) {
	str3 = '荣耀7i';
	str4 = str3;
} else if (u.indexOf('CHE-TL00H') > -1) {
	str3 = '荣耀4x';
	str4 = str3;
} else if (str.indexOf('SAMSUNG') > -1) {
	str3 = str3.replace(/SAMSUNG/, "三星");
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (str.indexOf('SAMSUNG') > -1) {
	str3 = str3.replace(/SAMSUNG/, "三星");
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (u.indexOf('HUAWEI') > -1) {
	str3 = str3.replace(/HUAWEI/, "");
	str3arr = str3.split("/");
	str4 = str3arr[0];
	str4 = '华为' + str4;
} else if (u.indexOf('; HW') > -1) {
	str3 = str3.replace(/HW-/, "");
	str3arr = str3.split("/");
	str4 = str3arr[0];
	str4 = '华为' + str4;
} else if (u.indexOf('K-Touch') > -1) {
	str3 = str3.replace(/K-Touch/, "");
	str3arr = str3.split("/");
	str4 = str3arr[0];
	str4 = '天语' + str4;
} else if (u.indexOf('lephone') > -1) {
	str3 = str3.replace(/lephone/, "乐丰");
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (u.indexOf('Lenovo') > -1) {
	str3 = str3.replace(/Lenovo/, "联想");
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (u.indexOf('; LE') > -1) {
	str3 = str3.replace(/LE/, "乐视");
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (u.indexOf('; Le') > -1) {
	str3 = str3.replace(/Letv/, "乐视");
	str3 = str3.replace(/Le/, "乐视");
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (u.indexOf('; NX') > -1) {
	str3 = '努比亚' + str3;
	str3arr = str3.split("/");
	str4 = str3arr[0];
} else if (u.indexOf('WOW') > -1) {
	str4 = '';
} else {
	str3arr = str3.split("/");
	str3 = str3arr[0];
	nn = str3.length;
	if (nn < 15) {
		str4 = str3;
	} else {
		str4 = '';
	}

}
