---
title: «Отрада сигнальщика»
subtitle: Почему мы так часто говорим о Protobuf.
author:
  name: Дмитрий Дашенков
  photo: dashenkov.png
weight: 1
---

{{< youtube id="kQLax2llW5I" title="Отрада сигнальщика" >}}
{{< presentation name="Презентация" url="https://drive.google.com/file/d/1ZKuOzWR8YDqVf6pK5lZzqUSVI-Hniyh7/view?usp=sharing" >}}

#### Материалы по теме

### Статьи
- [Protobuf — не только сериализация. Генерация кода и другие прикладные аспекты](https://dou.ua/lenta/articles/protobuf-guide/) \
  Наш опыт работы с&nbsp;Protobuf, его возможности, полезные для широкого круга проектов, и&nbsp;для
  DDD-проектов в&nbsp;частности.
- [Data Serialization Comparison](https://labs.criteo.com/2017/05/serialization/) \
  Сравнение Protobuf, Apache Thrift и других альтернатив.
- [Cap'n Proto, FlatBuffers, and SBE](https://capnproto.org/news/2014-06-17-capnproto-flatbuffers-sbe.html) \
  Сравнение Protobuf с другими библиотеками от создателя Cap'n Proto и Protobuf v2.
- [Why Protobuf instead of Cap'n Proto, or SBE, or FlatBuffers?](https://spine.io/faq/#why-protobuf-instead-of-proto) \
  Почему мы&nbsp;выбрали Protobuf как инструмент кодогенерации и&nbsp;сериализации для фреймворка
  Spine.
- [The Object-Relational Impedance Mismatch](https://hibernate.org/orm/what-is-an-orm/#the-object-relational-impedance-mismatch) \
  Заметка о&nbsp;проблемах совместимости объектных и&nbsp;реляционных моделей от&nbsp;Hibernate,
  предшествовавшая нашему отказу от&nbsp;ORM в&nbsp;пользу подхода, описанного 
  в&nbsp;[статье](https://dou.ua/lenta/articles/protobuf-guide/)
- [Как перейти на gRPC, сохранив REST](https://habr.com/ru/post/337716/) \
  Почему gRPC больше подходит для DDD, и&nbsp;как перейти на&nbsp;эту технологию при наличии уже
  использующихся REST-клиентов.

#### Инструменты
- [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway) \
  Плагин, позволяющий перейти на gRPC, не теряя существующие REST-клиенты.

#### Примеры
- [Spine Event Engine](https://github.com/grpc-ecosystem/grpc-gateway) \
  Наш фреймворк для создания реактивных DDD&nbsp;систем, в&nbsp;коде которого можно посмотреть, как
  на&nbsp;практике реализованы подходы, описанные в&nbsp;докладе 
  и&nbsp;[простые примеры приложений](https://github.com/spine-examples) на&nbsp;базе фреймворка.
