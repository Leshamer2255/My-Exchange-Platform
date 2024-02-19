#pragma once

#include <drogon/HttpSimpleController.h>
#include <drogon/drogon.h>
using namespace drogon;

class ExchangeCtrl : public drogon::HttpSimpleController<ExchangeCtrl>
{
  public:
    void asyncHandleHttpRequest(const HttpRequestPtr& req, std::function<void (const HttpResponsePtr &)> &&callback) override;
    PATH_LIST_BEGIN
    // list path definitions here;
    // PATH_ADD("/path", "filter1", "filter2", HttpMethod1, HttpMethod2...);
    PATH_ADD("/exchange", Get, Post);
    PATH_LIST_END
};
