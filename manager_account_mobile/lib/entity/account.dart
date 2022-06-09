import 'dart:convert';

class Account {
  final int id;
  final double discount;
  final DateTime creationDate;
  final String type;

  const Account({
    this.id = 0,
    required this.discount,
    required this.creationDate,
    required this.type,

  });

  factory Account.fromJson(Map<String, dynamic> json) {
    return Account(
      id: json['id'],
      discount: json['discount'],
      creationDate: json['creationDate'],
      type: json['type'],

    );
  }

  factory Account.fromMap(Map<String, dynamic> json) => Account(
    id: json['id'],
    discount: json['discount'],
    creationDate: DateTime.parse(json['creationDate'].toString() ),
    type: json['type'],
  );

  List<Account> postFromJson(String str) =>
      List<Account>.from(json.decode(str).map((x) => Account.fromMap(x)));
}