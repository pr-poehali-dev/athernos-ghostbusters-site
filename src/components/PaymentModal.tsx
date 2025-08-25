import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface DonationPackage {
  name: string;
  price: number;
  features: string[];
  icon: string;
  color: string;
}

interface PaymentModalProps {
  pkg: DonationPackage;
  children: React.ReactNode;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ pkg, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formData, setFormData] = useState({
    playerName: '',
    email: '',
    discord: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const paymentMethods = [
    { id: 'sbp', name: 'СБП', icon: '💳', description: 'Система Быстрых Платежей' },
    { id: 'card', name: 'Банковская карта', icon: '💳', description: 'Visa, MasterCard, МИР' },
    { id: 'yoomoney', name: 'ЮMoney', icon: '💰', description: 'Яндекс.Деньги' },
    { id: 'qiwi', name: 'QIWI', icon: '🥝', description: 'QIWI Кошелек' },
    { id: 'steam', name: 'Steam', icon: '🎮', description: 'Через Steam Wallet' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async () => {
    if (!selectedMethod || !formData.playerName || !formData.email) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    setIsLoading(true);
    
    // Симуляция процесса оплаты
    setTimeout(() => {
      alert(`Спасибо за покупку пакета ${pkg.name}! Донат будет выдан на игроке ${formData.playerName} в течение 10 минут.`);
      setIsLoading(false);
      setIsOpen(false);
      setFormData({ playerName: '', email: '', discord: '' });
      setSelectedMethod('');
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-minecraft-dark border-2 border-minecraft-green max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl pixel-font text-minecraft-gold flex items-center gap-2">
            <span className="text-3xl">{pkg.icon}</span>
            Покупка пакета {pkg.name}
          </DialogTitle>
          <DialogDescription className="text-minecraft-green pixel-font text-lg">
            Стоимость: {pkg.price} ₽
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Package Features */}
          <Card className="bg-minecraft-dark/50 border-minecraft-gold">
            <CardHeader>
              <CardTitle className="text-minecraft-gold pixel-font">Что входит в пакет:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white pixel-font">
                    <Icon name="Check" size={16} className="text-minecraft-green mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Player Info Form */}
          <Card className="bg-minecraft-dark/50 border-minecraft-green">
            <CardHeader>
              <CardTitle className="text-minecraft-green pixel-font">Информация об игроке</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white pixel-font mb-2 block">
                  Никнейм в Minecraft <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Ваш игровой ник"
                  value={formData.playerName}
                  onChange={(e) => handleInputChange('playerName', e.target.value)}
                  className="bg-black/50 border-minecraft-gold text-white pixel-font"
                />
              </div>
              <div>
                <label className="text-white pixel-font mb-2 block">
                  Email для чека <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-black/50 border-minecraft-gold text-white pixel-font"
                />
              </div>
              <div>
                <label className="text-white pixel-font mb-2 block">Discord (необязательно)</label>
                <Input
                  placeholder="username#1234"
                  value={formData.discord}
                  onChange={(e) => handleInputChange('discord', e.target.value)}
                  className="bg-black/50 border-minecraft-gold text-white pixel-font"
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-minecraft-dark/50 border-minecraft-diamond">
            <CardHeader>
              <CardTitle className="text-minecraft-diamond pixel-font">Способ оплаты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                      selectedMethod === method.id
                        ? 'border-minecraft-green bg-minecraft-green/20'
                        : 'border-gray-600 bg-black/30 hover:border-minecraft-gold'
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <div className="text-white pixel-font font-bold">{method.name}</div>
                        <div className="text-gray-400 text-sm pixel-font">{method.description}</div>
                      </div>
                      {selectedMethod === method.id && (
                        <Icon name="CheckCircle" size={20} className="text-minecraft-green ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Summary */}
          <Card className="bg-minecraft-gold/10 border-minecraft-gold">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white pixel-font text-lg">Итого к оплате:</span>
                <span className="text-minecraft-gold pixel-font text-2xl font-bold">{pkg.price} ₽</span>
              </div>
              <Badge className="mb-4 bg-minecraft-green text-black pixel-font">
                <Icon name="Shield" size={16} className="mr-1" />
                Гарантия выдачи донатa
              </Badge>
              <Button 
                className="w-full bg-minecraft-green hover:bg-minecraft-green/80 text-black font-bold pixel-font py-3 text-lg"
                onClick={handlePayment}
                disabled={isLoading || !selectedMethod || !formData.playerName || !formData.email}
              >
                {isLoading ? (
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                ) : (
                  <Icon name="CreditCard" size={20} className="mr-2" />
                )}
                {isLoading ? 'Обработка...' : `Оплатить ${pkg.price} ₽`}
              </Button>
            </CardContent>
          </Card>

          {/* Important Info */}
          <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <Icon name="AlertTriangle" size={20} className="text-red-400 mt-1" />
              <div className="text-red-200 pixel-font text-sm space-y-1">
                <p>• Донат выдается автоматически в течение 10 минут</p>
                <p>• Убедитесь, что указали правильный никнейм</p>
                <p>• Возврат средств возможен только в случае технической ошибки</p>
                <p>• По всем вопросам обращайтесь в Discord поддержку</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .pixel-font {
            font-family: 'Courier New', monospace;
            text-shadow: 1px 1px 0px rgba(0,0,0,0.8);
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;