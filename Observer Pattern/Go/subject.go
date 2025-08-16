package main

//Subject == Publisher 

type Subject interface {
    register(observer Observer)
    deregister(observer Observer)
    notifyAll()
}