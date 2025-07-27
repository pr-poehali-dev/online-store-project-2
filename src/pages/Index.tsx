import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Молоток YT-4620 рихтовочный 740гр",
      price: "871 ₽",
      image: "/placeholder.svg",
      category: "Ручной инструмент",
      brand: "YATO"
    },
    {
      id: 2,
      name: "Миксер под SDS Plus 50см, 135.43",
      price: "247 ₽",
      image: "/placeholder.svg",
      category: "Электроинструмент",
      brand: "Einhell"
    },
    {
      id: 3,
      name: "Отвертка HT7005 индикаторная цифровая",
      price: "660 ₽",
      image: "/placeholder.svg",
      category: "Измерительный инструмент",
      brand: "Honeytek"
    },
    {
      id: 4,
      name: "Ножницы YT-19763 универсальные 170 мм",
      price: "197 ₽",
      image: "/placeholder.svg",
      category: "Ручной инструмент",
      brand: "YATO"
    },
    {
      id: 5,
      name: "Отвертка DL8002 тестер индикаторная",
      price: "83 ₽",
      image: "/placeholder.svg",
      category: "Измерительный инструмент",
      brand: "Deli"
    },
    {
      id: 6,
      name: "Дрель ударная DWT SBM-1050 T",
      price: "4 850 ₽",
      image: "/placeholder.svg",
      category: "Электроинструмент",
      brand: "DWT"
    }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex space-x-4">
              <span className="flex items-center">
                <Icon name="Heart" size={16} className="mr-1" />
                Закладки (0)
              </span>
              <span className="flex items-center">
                <Icon name="GitCompare" size={16} className="mr-1" />
                Сравнение (0)
              </span>
              <span className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-1" />
                Джанкой
              </span>
            </div>
            <div className="flex space-x-4">
              <span>Блог</span>
              <span>Помощь</span>
              <span>Личный кабинет</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-gray-800">ИНСТРУМЕНТ.РУ</div>
              <div className="text-sm">
                <div className="font-semibold">7 (978) 50-50-330</div>
                <div className="font-semibold">8 (800) 50-50-330</div>
                <div className="text-gray-500">support@aleti.tools</div>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-red-500 font-medium">Скидки</a>
              <a href="#" className="text-green-600 font-medium">Магазин</a>
              <a href="#" className="text-blue-500 font-medium">Сервис</a>
              <a href="#" className="text-gray-700 hover:text-primary">Прокат инструментов</a>
              <a href="#" className="text-gray-700 hover:text-primary">Бренды</a>
              <a href="#" className="text-gray-700 hover:text-primary">Контакты</a>
            </nav>
          </div>

          {/* Search and cart */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-48 bg-primary text-primary-foreground">
                  <Icon name="Menu" size={16} className="mr-2" />
                  <SelectValue placeholder="Каталог" defaultValue="catalog" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="catalog">Каталог</SelectItem>
                  <SelectItem value="power-tools">Электроинструмент</SelectItem>
                  <SelectItem value="hand-tools">Ручной инструмент</SelectItem>
                  <SelectItem value="measuring">Измерительный инструмент</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Input 
                    placeholder="Умный поиск в каталоге" 
                    className="pr-10"
                  />
                  <Button 
                    size="sm" 
                    className="absolute right-1 top-1 bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              {cartCount} товаров на 0 ₽
            </Button>
          </div>
        </div>
      </header>

      {/* Hero section with latest products */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Новые поступления</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Wrench" size={48} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-sm font-normal leading-tight h-12 overflow-hidden">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.brand}
                    </Badge>
                  </div>
                  <div className="text-lg font-bold text-gray-800 mb-3">
                    {product.price}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button 
                      onClick={addToCart}
                      className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                      variant="secondary"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MoreHorizontal" size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Постоянное наличие</h3>
                <p className="text-sm text-gray-600">80% товара в наличии</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Icon name="ShoppingCart" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Широкий ассортимент</h3>
                <p className="text-sm text-gray-600">Более 27 000 товаров в 1000 категорий</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Icon name="Truck" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Доставка по всей стране</h3>
                <p className="text-sm text-gray-600">СДЭК, Boxberry, деловые линии</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Icon name="Settings" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Авторизованный сервисный центр</h3>
                <p className="text-sm text-gray-600">Ассортимент запчастей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compressors section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Компрессоры</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1,2,3,4,5].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon name="Wind" size={48} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-sm font-normal leading-tight">
                    Компрессор воздушный {item}-литровый
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-lg font-bold text-gray-800 mb-3">
                    {(item * 2850).toLocaleString()} ₽
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    onClick={addToCart}
                    className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    variant="secondary"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ИНСТРУМЕНТ.РУ</h3>
              <p className="text-gray-300 text-sm">
                Профессиональные строительные инструменты для любых задач
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Электроинструмент</a></li>
                <li><a href="#" className="hover:text-white">Ручной инструмент</a></li>
                <li><a href="#" className="hover:text-white">Измерительный инструмент</a></li>
                <li><a href="#" className="hover:text-white">Компрессоры</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Прокат инструментов</a></li>
                <li><a href="#" className="hover:text-white">Сервисный центр</a></li>
                <li><a href="#" className="hover:text-white">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white">Гарантия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>7 (978) 50-50-330</p>
                <p>8 (800) 50-50-330</p>
                <p>support@aleti.tools</p>
                <p>г. Джанкой, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
            © 2024 ИНСТРУМЕНТ.РУ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;