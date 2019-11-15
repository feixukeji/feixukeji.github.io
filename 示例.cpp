def main():
	robot_drv.set_joints(91,25,92,25)
	turnleft(90)
	fly(50)
	cross(50,40,200)
	turnright(45)
	fly(50)
	go(50,50)
	fly(50)
	cross(50)
	turnright(315)
	fly(60,51,49)
	go(70,1000)
	go(100,4000)
	fly(60,59,61)
	cross(70)
	turnright(225)
	cross(70,70)
	cross(70,70,340)
	turnleft(270)
	cross(70,70,90)
	turnright(180)
	cross(70,70)
	cross(70)
	turnright(90)
	fly(60)
	go(60,500)
	fly(60,61,59)
	go(60,500)
	fly(60)
	go(70,500)
	fly(70)
	cross(60,60)
	cross(60,60)
	cross(60,60,100)
	turnright(330)
	fly(60,61,59)
	go(60,2200)
	jump()
	fly(60,59,61)
	cross(60)
	turnright(180)
	cross(60,60)
	cross(60,60,330)
	turnright(180)
	cross(60,60)
	cross(60)
	turnright(180)
	fly(70,69,71)
	go(70,1150)
	turnright(30)
	fly(80)
	go(100)

def get(x):
	return robot_drv.get_dist(x)

def moto(vl,vr):
	robot_drv.set_motors(1,vl,2,vl,3,vr,4,vr)

def press():
	robot_drv.set_motors(121,6000,122,6000,123,6000,124,6000)

def stop():
	moto(10,10)
	for i in range(200):press()
	robot_drv.stop_all_motor()

def drive(v):
	robot_drv.set_motors(5,100,6,100,7,100)
	press()
	while get(33)>140 and get(33)>get(34):moto(v,int(v*3/5))
	while get(34)>140 and get(34)>get(33):moto(int(v*3/5),v)
	v2=max(v-int(abs(get(31)-get(32))/32),-5)
	if get(31)>get(32):moto(v2,v)
	else:moto(v,v2)

def go(v,t=100000):
	robot_drv.start_time();
	while robot_drv.get_time()<t:drive(v)

def turnleft(degree):
	robot_drv.stop_all_motor()
	robot_drv.sleep(100)
	while abs(degree-get(60))>15:moto(-15,15)
	while abs(degree-get(60))>3:moto(-4,4)
	robot_drv.stop_all_motor()
	robot_drv.sleep(100)

def turnright(degree):
	robot_drv.stop_all_motor()
	robot_drv.sleep(100)
	while abs(degree-get(60))>15:moto(15,-15)
	while abs(degree-get(60))>3:moto(4,-4)
	robot_drv.stop_all_motor()
	robot_drv.sleep(100)

def cross(v1,v2=40,t=310):
	while get(37)!=255 and get(38)!=255:drive(v1)
	go(v2,t)

def fly(v,vl=0,vr=0):
	if vl==0:vl=vr=v
	while get(37)!=48 and get(38)!=48:drive(v)
	moto(vl,vr)
	robot_drv.sleep(1000)
	robot_drv.stop_all_motor()

def jump():
	while get(59)>300:drive(20)
	robot_drv.set_joints(101,180,102,180,103,180,104,180)
	robot_drv.stop_all_motor()
	robot_drv.sleep(500)
	for i in range(36):robot_drv.set_motors(121,1850,122,1500,123,1850,124,1500)
	for i in range(36):robot_drv.set_motors(120,1500,125,1500)
	robot_drv.set_joints(101,0,102,0,103,0,104,0)
	robot_drv.stop_all_motor()
	robot_drv.sleep(500)

import sys
import irobotq_robotdriver as robot_drv

if __name__ == '__main__':

    try:
        ret=robot_drv.init(sys.argv[1],sys.argv[2],int(sys.argv[3]))
        if(ret == 0):
            main()
            robot_drv.over()
            print("机器人程序运行结束")
        else:
            print('初始化错误，错误码:%d' % ret)
        print('按任意键退出')
        v=input()
    except Exception as e:
        print (e)
        print('按任意键退出')
        v=input()
