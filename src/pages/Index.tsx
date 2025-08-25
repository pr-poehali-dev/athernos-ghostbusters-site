import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const MinecraftServer = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(47);
  const [maxPlayers] = useState(100);
  const [serverUptime, setServerUptime] = useState('3д 14ч 27м');

  // Симуляция изменения онлайна
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => {
        const change = Math.floor(Math.random() * 6) - 3;
        const newValue = Math.max(20, Math.min(95, prev + change));
        return newValue;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const donationPackages = [
    {
      name: 'VIP',
      price: 299,
      features: ['Цветной ник', 'Приватные сундуки', '/fly команда', '2x опыт'],
      icon: '👑',
      color: 'minecraft-gold'
    },
    {
      name: 'PREMIUM',
      price: 599,
      features: ['Все возможности VIP', '/tp к игрокам', 'Креативный режим', 'Приоритет входа'],
      icon: '💎',
      color: 'minecraft-diamond'
    },
    {
      name: 'ADMIN',
      price: 1299,
      features: ['Все возможности PREMIUM', 'Модераторские команды', 'Создание варпов', 'Бессмертие'],
      icon: '⚡',
      color: 'minecraft-green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-dark via-minecraft-dirt to-minecraft-stone">
      {/* Header */}
      <header className="bg-minecraft-dark/90 backdrop-blur-sm border-b-4 border-minecraft-green sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/img/794c09aa-daca-443a-9681-172ef9fcd5b9.jpg" alt="Server Logo" className="w-12 h-12 pixelated" />
              <div>
                <h1 className="text-3xl font-bold text-minecraft-green pixel-font">GHOSTBUSTERSHY</h1>
                <p className="text-minecraft-gold pixel-font">Minecraft 1.20.10 • Aternos Server</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-minecraft-green text-black pixel-font text-lg px-4 py-2">
                <Icon name="Users" size={20} className="mr-2" />
                {onlinePlayers}/{maxPlayers}
              </Badge>
              <Button className="bg-minecraft-gold hover:bg-minecraft-gold/80 text-black font-bold pixel-font px-6 py-3 text-lg">
                ПОДКЛЮЧИТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h2 className="text-6xl font-bold text-minecraft-green pixel-font mb-6 animate-pulse">
            🎮 ДОБРО ПОЖАЛОВАТЬ НА СЕРВЕР 🎮
          </h2>
          <p className="text-2xl text-white pixel-font mb-8 max-w-4xl mx-auto">
            Окунись в захватывающий мир приключений! Строй, исследуй, сражайся с друзьями на лучшем сервере версии 1.20.10
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green/80 text-black font-bold pixel-font px-8 py-4 text-xl">
              <Icon name="Play" size={24} className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-minecraft-gold text-minecraft-gold hover:bg-minecraft-gold hover:text-black pixel-font px-8 py-4 text-xl">
              <Icon name="MessageSquare" size={24} className="mr-2" />
              DISCORD
            </Button>
          </div>
        </section>

        {/* Server Stats */}
        <section>
          <h3 className="text-4xl font-bold text-minecraft-green pixel-font mb-8 text-center">📊 СТАТИСТИКА СЕРВЕРА</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-minecraft-dark/80 border-minecraft-green border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <CardTitle className="text-minecraft-green pixel-font text-2xl">Игроки онлайн</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-minecraft-gold pixel-font mb-2">{onlinePlayers}</div>
                <Progress value={(onlinePlayers / maxPlayers) * 100} className="mb-2" />
                <p className="text-white pixel-font">из {maxPlayers} максимум</p>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/80 border-minecraft-gold border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">⏰</div>
                <CardTitle className="text-minecraft-gold pixel-font text-2xl">Аптайм сервера</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-minecraft-green pixel-font mb-2">{serverUptime}</div>
                <Badge className="bg-minecraft-green text-black pixel-font">🟢 ОНЛАЙН</Badge>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/80 border-minecraft-diamond border-2 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle className="text-minecraft-diamond pixel-font text-2xl">Активность</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white pixel-font mb-2">Высокая</div>
                <p className="text-minecraft-green pixel-font">Пик: 87 игроков</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Donation Packages */}
        <section>
          <h3 className="text-4xl font-bold text-minecraft-gold pixel-font mb-8 text-center">💰 ДОНАТНЫЕ ПАКЕТЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationPackages.map((pkg, index) => (
              <Card key={index} className={`bg-minecraft-dark/90 border-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-${pkg.color}/50`} 
                   style={{borderColor: pkg.color === 'minecraft-gold' ? '#FFD700' : pkg.color === 'minecraft-diamond' ? '#4169E1' : '#00AA00'}}>
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{pkg.icon}</div>
                  <CardTitle className={`text-3xl pixel-font mb-2`} 
                           style={{color: pkg.color === 'minecraft-gold' ? '#FFD700' : pkg.color === 'minecraft-diamond' ? '#4169E1' : '#00AA00'}}>
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-4xl font-bold text-white pixel-font">
                    {pkg.price} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white pixel-font">
                        <Icon name="Check" size={20} className="text-minecraft-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/80 text-black font-bold pixel-font py-3 text-lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Server Info */}
        <section className="bg-minecraft-dark/60 rounded-lg p-8 border-2 border-minecraft-green">
          <h3 className="text-3xl font-bold text-minecraft-green pixel-font mb-6 text-center">🔧 ИНФОРМАЦИЯ О СЕРВЕРЕ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-minecraft-gold pixel-font mb-4">📍 Подключение</h4>
              <div className="space-y-3">
                <div className="flex justify-between bg-black/50 p-3 rounded">
                  <span className="text-white pixel-font">IP адрес:</span>
                  <span className="text-minecraft-green pixel-font font-bold">ghostbustershy.aternos.me</span>
                </div>
                <div className="flex justify-between bg-black/50 p-3 rounded">
                  <span className="text-white pixel-font">Порт:</span>
                  <span className="text-minecraft-green pixel-font font-bold">25565</span>
                </div>
                <div className="flex justify-between bg-black/50 p-3 rounded">
                  <span className="text-white pixel-font">Версия:</span>
                  <span className="text-minecraft-green pixel-font font-bold">1.20.10</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-minecraft-gold pixel-font mb-4">⚙️ Особенности</h4>
              <div className="space-y-2">
                <Badge className="mr-2 mb-2 bg-minecraft-green text-black pixel-font">PvP</Badge>
                <Badge className="mr-2 mb-2 bg-minecraft-gold text-black pixel-font">Экономика</Badge>
                <Badge className="mr-2 mb-2 bg-minecraft-diamond text-white pixel-font">Кланы</Badge>
                <Badge className="mr-2 mb-2 bg-minecraft-green text-black pixel-font">Приваты</Badge>
                <Badge className="mr-2 mb-2 bg-minecraft-gold text-black pixel-font">Магазины</Badge>
                <Badge className="mr-2 mb-2 bg-minecraft-diamond text-white pixel-font">Ивенты</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .pixel-font {
          font-family: 'Courier New', monospace;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.8);
        }
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
};

export default MinecraftServer;